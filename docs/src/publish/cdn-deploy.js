const fs = require('fs');
const path = require('path');
const AWS = require('aws-sdk');

const s3 = new AWS.S3();

// publish to  S3 bucket at /components/${package-name}/v${package-version}/
const currentPackageInfo = JSON.parse(
  fs.readFileSync('./package.json', 'utf8'),
);
const packageName = currentPackageInfo.name.replace('@cagov/', '');
const packageVersion = currentPackageInfo.version;
const keyPrefix = `components/${packageName}/v${packageVersion}/dist/`;
const cssKey = `components/${packageName}/v${packageVersion}/index.css`;
const contentTypeMap = new Map();
contentTypeMap.set('js', 'text/javascript');
contentTypeMap.set('css', 'text/css');
contentTypeMap.set('json', 'application/json');

const directoryToUpload = `${process.cwd()}/dist`;
const cssToUpload = `${process.cwd()}/index.css`;
const bucketName = 'cdn.designsystem.webstandards.ca.gov';

const filePaths = [];

function addToFilePaths(filePath) {
  if (fs.existsSync(filePath)) {
    const stat = fs.statSync(filePath);
    if (stat.isFile()) {
      filePaths.push(filePath);
    }
  }
}

// get file paths
const getFilePaths = (dir) => {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach((name) => {
      const filePath = path.join(dir, name);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        getFilePaths(filePath);
      } else {
        addToFilePaths(filePath);
      }
    });
  }
};

// get /dist/*
getFilePaths(directoryToUpload);
// get /index.css
addToFilePaths(cssToUpload);

// upload to S3
const uploadToS3 = (dir, filePath) =>
  new Promise((resolve, reject) => {
    let key = keyPrefix + filePath.split(`${dir}/`)[1];
    if (filePath.indexOf('.css') > -1) {
      key = cssKey;
    }
    const params = {
      Bucket: bucketName,
      Key: key,
      Body: fs.readFileSync(filePath),
    };
    // get file extenstion, match to content type, tell S3 or it may apply invalid mime type interfering with usage
    const fileExt = key.split('.').pop();
    if (contentTypeMap.get(fileExt) !== undefined) {
      params.ContentType = contentTypeMap.get(fileExt);
    }

    s3.putObject(params, (err) => {
      if (err) {
        reject(err);
      } else {
        console.log(`uploaded ${params.Key} to ${params.Bucket}`);
        resolve(filePath);
      }
    });
  });

const uploadPromises = filePaths.map((filePath) =>
  uploadToS3(
    filePath.indexOf('.css') > -1 ? cssToUpload : directoryToUpload,
    filePath,
  ),
);
Promise.all(uploadPromises)
  .then((result) => {
    console.log('uploads complete');
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
    // called from prepublish, exit if buid cannot be deployed to cdn which will stop npm publish
    process.exit(1);
  });

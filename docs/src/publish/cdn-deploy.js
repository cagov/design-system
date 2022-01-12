const fs = require('fs');
const path = require('path');
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

// publish to  S3 bucket at /components/${package-name}/v${package-version}/
let currentPackageInfo = JSON.parse(fs.readFileSync('./package.json','utf8'));
const packageName = currentPackageInfo.name.replace('@cagov/','');
const packageVersion = currentPackageInfo.version;
const keyPrefix = `components/${packageName}/v${packageVersion}/dist/`;

const directoryToUpload = process.cwd()+'/dist';
const bucketName = 'cdn.designsystem.webstandards.ca.gov';

// get file paths
const filePaths = [];
const getFilePaths = (dir) => {
  fs.readdirSync(dir).forEach(function (name) {
    const filePath = path.join(dir, name);
    const stat = fs.statSync(filePath);
    if (stat.isFile()) {
      filePaths.push(filePath);
    } else if (stat.isDirectory()) {
      getFilePaths(filePath);
    }
  });
};

getFilePaths(directoryToUpload);

// upload to S3
const uploadToS3 = (dir, path) => {
  return new Promise((resolve, reject) => {
    const key = keyPrefix + path.split(`${dir}/`)[1];
    const params = {
      Bucket: bucketName,
      Key: key,
      Body: fs.readFileSync(path),
    };
    s3.putObject(params, (err) => {
      if (err) {
        reject(err);
      } else {
        console.log(`uploaded ${params.Key} to ${params.Bucket}`);
        resolve(path);
      }
    });
  });
};

const uploadPromises = filePaths.map((path) =>
  uploadToS3(directoryToUpload, path)
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
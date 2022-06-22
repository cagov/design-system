import { vars } from './script-utils.js';
import Sprite from './Sprite.js';

const sprite = new Sprite();
sprite.include = ['albums', 'zoom-out', 'angry', 'apps'];
sprite.dest = vars.componentFileSome;

sprite.create();

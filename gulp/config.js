'use strict';
import dotenv from 'dotenv'

dotenv.config({silent: true})

const base = process.env.STATIC_DIR
const dest = `${base}/dist`;

module.exports = {
  project_name: 'rfp',
  css: {
    src: `${base}/css`,
    files: ['*.css']
  },
  docs: {
    src: `${base}/docs`,
    js: {
        src: `./${base}/docs/js`
    },
    scss: {
        src: `${base}/docs/scss`
    }
  },
  images: {
    src: `${base}/images`,
    dest: `${dest}/images`
  },
  stylus: {
    src: `${base}/stylus`,
    files: [
        `${base}/stylus/*.styl`,
        `${base}/stylus/**/*.styl`
    ],
    options: {}
  },
  templates : {
    files: [
        `${base}/views/*.jade`,
        `${base}/views/**/*.jade`
    ],
    dest: '.'
  }
};

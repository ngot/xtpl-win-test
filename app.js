'use strict';

const Xtemplate = require('xtemplate');
const path = require('path');
const fs = require('fs');

function load(tpl, callback) {
    const template = tpl.root;
    const pathName = tpl.name;
    console.log('pathName:', pathName);
    let content = fs.readFileSync(pathName).toString();
    const fn = template.compile(content, pathName);
    
    callback(null, fn)
}

const entry = path.join(__dirname, 'view/home.xtpl')

const cfg = {
    name: entry,
    loader: { load },
    strict: true,
    encoding: 'utf-8',
};

let fn = new Xtemplate(cfg);

fn.render({}, function (err, content) {
    if (err) {
        console.log('pathName:', pathName);
    } else {
        console.log('content:', content);
    }
});

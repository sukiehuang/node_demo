/**
 * Created by 茜 on 2017/2/14.
 */
var student = require('./student');
var teacher = require('./teacher');

function add(teacherName,students){
    teacher.add(teacherName);
    students.forEach(function (item) {
        student.add(item);
    })
}

exports.add = add;
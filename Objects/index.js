const obj = {
    firstName : "Anjali",
    lastName : "Rai",
    courseList: [],

    getCourse : function(courseName) {
       return this.courseList.push(courseName);
    },
    getCount : function() {
        return this.courseList.length;
    }
}

console.log(obj.getCourse("React"));
console.log(obj.courseList.length);
console.table(obj);
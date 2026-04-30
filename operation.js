import db from "./conn";

function insertStudent(id, name, age) {
    const student = { id, name, age };

    db.query("INSERT INTO students SET ?", student, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Student Inserted");
        }
    });
}

function updateStudent(id, name, age) {
    const student = { name, age };

    db.query(
        "UPDATE students SET ? WHERE id = ?",
        [student, id],
        (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Student Updated");
            }
        }
    );
}

function deleteStudent(id) {
    db.query(
        "DELETE FROM students WHERE id = ?",
        [id],
        (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Student Deleted");
            }
        }
    );
}
function showStudents() {
    db.query("SELECT * FROM students", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
}

//insertStudent(3, "hey", 10);
// updateStudent(1, "Sujeet Kumar", 23);
deleteStudent(3);
// showStudents();
import db from "./conn";

function insertCustomerOrder(id, name, age) {
    const student = { id, name, age };

    db.query("INSERT INTO students SET ?", customerOrder, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Student Inserted");
        }
    });
}

function updateCustomerOrder(id, name, orderno) {
    const student = { name, age };

    db.query(
        "UPDATE customerOrder SET ? WHERE id = ?",
        [customerOrder, id],
        (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Student Updated");
            }
        }
    );
}

function deleteCustomerOrder(id) {
    db.query(
        "DELETE FROM customerOrder WHERE id = ?",
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
function showCustomerOrder() {
    db.query("SELECT * FROM customerOrder", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
}



insertCustomerOrder(3, "hey", 10);
updateCustomerOrder(1, "Sujeet Kumar", 23);
deleteCustomerOrder(3);
showCustomerOrder();
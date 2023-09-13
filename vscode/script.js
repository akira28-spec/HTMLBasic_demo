var selectedRow = null;

function onformSubmit() {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow === null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();
}

// Retrieve Data
function readFormData() {
    var formData = {};
    formData["productCode"] = document.getElementById("productcode").value;
    formData["product"] = document.getElementById("product").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["perPrice"] = document.getElementById("perPrice").value;
    return formData;
}

// Insert the Data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.productCode;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.product;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.qty;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.perPrice;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = '<button onclick="onEdit(this)">Edit</button> <button onclick="onDelete(this)">Delete</button>';
}

// Edit Form Data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('productcode').value = selectedRow.cells[0].innerHTML;
    document.getElementById('product').value = selectedRow.cells[1].innerHTML;
    document.getElementById('qty').value = selectedRow.cells[2].innerHTML;
    document.getElementById('perPrice').value = selectedRow.cells[3].innerHTML;
}

// Update Record
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.productCode;
    selectedRow.cells[1].innerHTML = formData.product;
    selectedRow.cells[2].innerHTML = formData.qty;
    selectedRow.cells[3].innerHTML = formData.perPrice;
}

// Delete
function onDelete(td) {
    if (confirm("Do you want to delete?")) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

// Reset Form
function resetForm() {
    document.getElementById('productcode').value = '';
    document.getElementById('product').value = '';
    document.getElementById('qty').value = '';
    document.getElementById('perPrice').value = '';
    selectedRow = null;
}

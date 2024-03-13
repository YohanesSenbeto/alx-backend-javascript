// task_3/js/main.ts

// Triple slash directive to include dependencies
/// <reference path="./crud.d.ts" />

// Import RowID and RowElement
import { RowID, RowElement } from "./interface";
// Import everything from crud.js as CRUD
import * as CRUD from "./crud";

// Create a row object
const row: RowElement = {
  firstName: "Guillaume",
    lastName: "Salva"
    };

    // Insert a row and save the returned row ID
    const newRowID: RowID = CRUD.insertRow(row);
    console.log(`CRUD.insertRow(${JSON.stringify(row)})`);
    console.log(`// Insert row ${JSON.stringify(row)}`);

    // Update the row with age field set to 23
    const updatedRow: RowElement = { ...row, age: 23 };
    CRUD.updateRow(newRowID, updatedRow);
    console.log(`CRUD.updateRow(${newRowID}, ${JSON.stringify(updatedRow)})`);
    console.log(`// Update row ${newRowID} ${JSON.stringify(updatedRow)}`);

    // Delete the row
    CRUD.deleteRow(newRowID);
    console.log(`CRUD.deleteRow(${newRowID})`);
    console.log(`// Delete row id ${newRowID}`);


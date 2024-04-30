## ES6 Classes Project Tasks

### Task 0: ClassRoom
- Implement a class named `ClassRoom`.
- Accepts one attribute named `maxStudentsSize` (Number).
- Assigns `maxStudentsSize` to `_maxStudentsSize`.

### Task 1: Initialize Rooms
- Import the `ClassRoom` class.
- Implement a function named `initializeRooms`.
- Returns an array of 3 `ClassRoom` objects with sizes 19, 20, and 34.

### Task 2: HolbertonCourse
- Implement a class named `HolbertonCourse`.
- Constructor attributes: `name` (String), `length` (Number), `students` (Array of Strings).
- Verify attribute types during object creation.
- Store each attribute with an underscore (e.g., `_name`).
- Implement getter and setter for each attribute.

### Task 3: Currency
- Implement a class named `Currency`.
- Constructor attributes: `code` (String), `name` (String).
- Store each attribute with an underscore (e.g., `_name`).
- Implement getter and setter for each attribute.
- Implement a method named `displayFullCurrency`.

### Task 4: Pricing
- Import the `Currency` class.
- Implement a class named `Pricing`.
- Constructor attributes: `amount` (Number), `currency` (Currency).
- Store each attribute with an underscore.
- Implement getter and setter for each attribute.
- Implement a method named `displayFullPrice`.
- Implement a static method named `convertPrice`.

### Task 5: Building
- Implement a class named `Building`.
- Constructor attributes: `sqft` (Number).
- Store `sqft` with an underscore.
- Implement a getter for `sqft`.
- Consider the class abstract.
- Require subclasses to implement `evacuationWarningMessage`.

### Task 6: SkyHighBuilding
- Import `Building`.
- Implement a class named `SkyHighBuilding` that extends `Building`.
- Constructor attributes: `sqft` (Number), `floors` (Number).
- Store each attribute with an underscore.
- Implement a getter for each attribute.
- Override `evacuationWarningMessage`.

### Task 7: Airport
- Implement a class named `Airport`.
- Constructor attributes: `name` (String), `code` (String).
- Store each attribute with an underscore.
- Default string description should return the airport code.

### Task 8: HolbertonClass
- Implement a class named `HolbertonClass`.
- Constructor attributes: `size` (Number), `location` (String).
- Store each attribute with an underscore.
- Implement casting into Number and String.

### Task 9: Hoisting
- Fix code to make it work.
- Define `HolbertonClass` before using it.
- Fix `StudentHolberton` class constructor.
- Fix `fullStudentDescription` method in `StudentHolberton`.

### Task 10: Car
- Implement a class named `Car`.
- Constructor attributes: `brand` (String), `motor` (String), `color` (String).
- Store each attribute with an underscore.
- Implement a method named `cloneCar`.

### Task 11: EVCar
- Import `Car`.
- Implement a class named `EVCar` that extends `Car`.
- Constructor attributes: `brand` (String), `motor` (String), `color` (String), `range` (String).
- Store each attribute with an underscore.
- Override `cloneCar` to return an instance of `Car`.

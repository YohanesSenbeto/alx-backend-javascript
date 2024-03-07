export default class HolbertonCourse {
	    constructor(name, length, students) {
		            this._name = name;
		            this._length = length;
		            this._students = students;
		        }

	    get name() {
		            return this._name;
		        }

	    set name(newName) {
		            if (typeof newName === "string") {
				                this._name = newName;
				            } else {
						                throw new TypeError("Name must be a string");
						            }
		        }
}

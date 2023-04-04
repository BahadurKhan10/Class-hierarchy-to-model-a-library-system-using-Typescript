"use strict";
class Item {
    constructor(title, author, publicationYear, available) {
        this._title = title,
            this._author = author,
            this._publicationYear = publicationYear,
            this._available = available;
    }
    //getters
    get title() {
        return this._title;
    }
    get author() {
        return this._author;
    }
    get publicationYear() {
        return this._publicationYear;
    }
    get available() {
        return this._available;
    }
    //setter
    set available(newAvail) {
        this.available = newAvail;
    }
    loan() {
        if (this._available === false) {
            return "Sorry, this item is already loaned.";
        }
        else {
            this._available = false;
            return "Loaning item \n Item loaned successfully.";
        }
    }
    returnItem() {
        if (this._available === true) {
            return "Sorry, item is not loaned";
        }
        else {
            this._available = true;
            return "Returning item \n Item returned successfully";
        }
    }
}
// Subclasses of item for each type of item
class Book extends Item {
    constructor(title, loanPeriod, author, publicationYear, available, category, pageSize) {
        super(title, author, publicationYear, available),
            this._category = category,
            this._pageSize = pageSize,
            this._loanPeriod = loanPeriod;
    }
    get category() {
        return this._category;
    }
    get pageSize() {
        return this._pageSize;
    }
    loanPeriod() {
        return this._loanPeriod;
    }
}
class ProjectJournel extends Item {
    constructor(title, loanPeriod, author, publicationYear, available, category, pageSize) {
        super(title, author, publicationYear, available),
            this._category = category,
            this._pageSize = pageSize,
            this._loanPeriod = loanPeriod;
    }
    get category() {
        return this._category;
    }
    get pageSize() {
        return this._pageSize;
    }
    loanPeriod() {
        return this._loanPeriod;
    }
}
class CD extends Item {
    constructor(title, loanPeriod, author, publicationYear, available, category, size) {
        super(title, author, publicationYear, available),
            this._category = category,
            this._size = size,
            this._loanPeriod = loanPeriod;
    }
    get category() {
        return this._category;
    }
    get pageSize() {
        return this._size;
    }
    loanPeriod() {
        return this._loanPeriod;
    }
}
// create instances of each type of item
const book1 = new Book("The Catcher in the Rye", "2 weeks", "J.D. Salinger", "1951", true, "Fiction", 224);
const journal1 = new ProjectJournel("Nature", "1 week", "Various", "1869", true, "Scientific", 68);
const cd1 = new CD("Abbey Road", "1 week", "The Beatles", "1969", true, "Rock", 333);
// test loan() and returnItem() methods
console.log(book1.loan()); //  output "Loaning item \n Item loaned successfully."
console.log(book1.loan()); //  output "Sorry, this item is already loaned."
console.log(book1.returnItem()); //  output "Returning item \n Item returned successfully"
console.log(book1.returnItem()); //  output "Sorry, item is not loaned"
console.log(journal1.loan()); //  output "Loaning item \n Item loaned successfully."
console.log(cd1.loan()); //  output "Loaning item \n Item loaned successfully."
console.log(journal1.returnItem()); //  output "Returning item \n Item returned successfully"
console.log(cd1.returnItem()); //  output "Returning item \n Item returned successfully"
//# sourceMappingURL=app.js.map
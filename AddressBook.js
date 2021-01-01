class Contact
{
    constructor(...parameters)
    {
        this.firstName = parameters[0];
        this.lastName = parameters[1];
        this.address = parameters[2];
        this.city = parameters[3];
        this.state = parameters[4];
        this.zip = parameters[5];
        this.phoneNumber = parameters[6];
        this.email = parameters[7];
    }

    get firstName() {
        return this._firstName;
    }
    set firstName(firstName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(firstName)) {
            this._firstName = firstName;    
        }
        else throw "Incorrect First Name!";
    }

    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(lastName)) {
            this._lastName = lastName;    
        }
        else throw "Incorrect Last Name!";
    }

    get address() {
        return this._address;
    }
    set address(address) {
        let addressRegex = RegExp('^[A-Za-z]{1}[A-Za-z\\s]{3,}$');
        if (addressRegex.test(address)) {
            this._address = address;
        }
        else throw "Invalid Address!";
    }

    get city() {
        return this._city;
    }
    set city(city) {
        let cityRegex = RegExp('^[A-Za-z]{1}[A-Za-z\\s]{3,}$');
        if (cityRegex.test(city)) {
            this._city = city;
        }
        else throw "Invalid City!";
    }

    get state() {
        return this._state;
    }
    set state(state) {
        let stateRegex = RegExp('^[A-Za-z]{1}[A-Za-z\\s]{3,}$');
        if (stateRegex.test(state)) {
            this._state = state;
        }
        else throw "Invalid State!";
    }

    get zip() {
        return this._zip;
    }
    set zip(zip) {
        let zipRegex = RegExp('^[1-9]{1}[0-9]{5}$');
        if (zipRegex.test(zip)) {
            this._zip = zip;
        } 
        else throw "Invalid Zip!"; 
    }

    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp('^([9][1][\\s])[789][0-9]{9}$');
        if (phoneNumberRegex.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
        }
        else throw "Invalid Phone Number!";
    }

    get email() {
        return this._email;
    }
    set email(email) {
        let emailRegex = RegExp("^[a-z0-9]+(([\\.+-][a-z0-9]{1,})?)+@[a-z0-9]+\\.([a-z]{2,4})+((\\.[a-z]{2,4})?)$");
        if (emailRegex.test(email)) {
            this._email = email;
        }
        else throw "Invalid Email!";
    }

    toString()
    {
        return "First Name = " + this.firstName + ", Last Name = " + this.lastName + ", Address = " + this.address +
               ", City = " + this.city + ", State = " + this.state + ", Zip = " + this.zip + ", Phone Number = " + 
               this.phoneNumber + ", Email = " + this.email;
    }
}

let addressBook = new Array();
try
{
    addressBook.push(new Contact("Tushar", "Jain", "Hauz Khas", "New Delhi", "Delhi", 110016, "91 9856342214", "tjain@gmail.com"));
    addressBook.push(new Contact("Arif", "Khan", "Malta Road", "Pilani", "Rajasthan", 330026, "91 9776543210", "akhan@gmail.com"));
}
catch (e)
{
    console.log(e);
}

addressBook.forEach(contact => console.log(contact.toString()));

let contact = searchPerson("Arif", addressBook);
updateContact(contact, "Zip", 333027);
console.log("Updated Contact: " + contact.toString());
deleteContact("Tushar", addressBook);
addressBook.forEach(contact => console.log(contact.toString()));

function searchPerson(personName, addressBook)
{
    let contact = null;
    addressBook.forEach(contactObject => {
        if (contactObject.firstName == personName)
        {
            contact = contactObject;
        }
    });
    return contact;
}

function deleteContact(personName, addressBook)
{
    let contact = searchPerson(personName, addressBook);
    if (contact != null) 
    {
        return addressBook.filter(contactObject => contactObject != contact);
    } 
    else
    {
        console.log("Contact Not Found!");
    }
}

function updateContact(contact, property, updatedEntry)
{
    try
    {
        switch(property)
        {
            case "First Nmae":
                contact.firstName = updatedEntry;
                break;
            case "Last Name":
                contact.lastName = updatedEntry;
                break;
            case "Address":
                contact.address = updatedEntry;
                break;
            case "City":
                contact.city = updatedEntry;
                break;
            case "State":
                contact.state = updatedEntry;
                break;
            case "Zip":
                contact.zip = updatedEntry;
                break;
            case "Phone Number":
                contact.phoneNumber = updatedEntry;
                break;
            case "Email":
                contact.email = updatedEntry;
                break;
            default:
                break;
        }
    } 
    catch (error) 
    {
        console.log(error);
        console.log("Unable to Update!");
    }
}
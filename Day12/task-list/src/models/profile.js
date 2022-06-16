export class Profile {
  constructor(id, name, surname, country) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.country = country;
  }

  toJson() {
    return {
      name: this.name,
      surname: this.surname,
      country: this.country,
    };
  }

  isValid() {
    return this.id && this.name && this.surname && this.country;
  }

  static fromFirebase(doc) {
    const data = doc.data();
    return new Profile(doc.id, data.name, data.surname, data.country);
  }
}

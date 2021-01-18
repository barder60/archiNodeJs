module.exports = class {
    constructor(id = null, createAt, typeTransac, idUser, idTicket) {
      this.id = id;
      this.createAt = createAt
      this.typeTransac = typeTransac
      this.idUser = idUser
      this.idTicket = idTicket
    }
  }
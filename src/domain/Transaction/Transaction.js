module.exports = class {
    constructor(id = null, createdAt , typeTransac, idUser, idTicket) {
      this.id = id;
      this.createdAt = createdAt
      this.typeTransac = typeTransac
      this.idUser = idUser
      this.idTicket = idTicket
    }
  }

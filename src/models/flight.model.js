export class FlightModel {
  constructor({ id, xa, ya, za }) {
    if (!/^[A-Za-z]{3}\d{3}$/.test(id)) {
      throw new Error('datos no válidos');
    }
    [xa, ya, za].forEach(v => {
      if (typeof v !== 'number' || isNaN(v)) {
        throw new Error('datos no válidos');
      }
    });

    this.id = id;
    this.xa = xa;
    this.ya = ya;
    this.za = za;
  }

  updatePosition({ xa, ya, za }) {
    this.xa = xa;
    this.ya = ya;
    this.za = za;
  }
}

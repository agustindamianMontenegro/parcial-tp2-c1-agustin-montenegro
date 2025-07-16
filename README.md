## Pruebas con `curl`


### Crear o actualizar un vuelo

curl -i -X POST http://localhost:4000/api/flights \
  -H "Content-Type: application/json" \
  -d '{"id":"AAA123","xa":0,"ya":0,"za":0}'

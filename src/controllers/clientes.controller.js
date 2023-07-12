import connection from "../db.js"

export const getOneClientes = async (req, res) => {
    const [rows] = await connection.query('SELECT * FROM usuarios WHERE id= ?', [req.params.id]);

    if (rows.length <= 0) {
        return res.status(404).json({
            message: `no se encontro ningun cliente con el id: ${req.params.id}`
        })
    }
    res.send(rows)
}

export const getClientes = async (req, res) => {
    const [rows] = await connection.query('SELECT * FROM usuarios');
    res.send(rows)
}

export const postClientes = async (req, res) => {
    const { nombre, email, edad } = req.body;
    const [rows] = await connection.query('INSERT INTO usuarios(nombre, email, edad) VALUES (?, ?, ?)', [nombre, email, edad]);
    res.send({
        id: rows.insertId,
        nombre,
        email,
        edad
    })
};

export const updateClientes = async (req, res) => {
    const { id } = req.params
    const { nombre, email, edad } = req.body
    const [result] = await connection.query('update usuarios set nombre = ifnull(?, nombre), email = ifnull(?, email), edad = ifnull(?, edad) where id= ?', [nombre, email, edad, id]);

    if (result.affectedRows <= 0) return res.status(404).json({ message: `el cliente con id: ${id} no fue encontrado` })

    const [rows] = await connection.query(`select * from usuarios where id=${id}`)
    res.json(rows)
}

export const deleteClientes = async (req, res) => {
    const [result] = await connection.query('delete from usuarios where id = ?', [req.params.id]);
    if (result.affectedRows <= 0) {
        return res.status(404).json({
            message: `EL cliente con id: ${req.params.id} no existe`
        })
    }
    res.sendStatus(204)
}

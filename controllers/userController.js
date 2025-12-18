import db from '../config/db.js';

export const getUsers = (req, res) => {
    db.query("SELECT * FROM users", (err, results) => {
        if (err) return res.status(500).json({ message: err });

        res.json(results);
    });
};

export const getUserById = (req, res) => {
    const { id } = req.params;
    
    db.query("SELECT * FROM users WHERE id = ?", [id], (err,
results) => {
        if (err) return res.status(500).json({ message: err });

        if (results.length === 0)
            return res.status(404).json({ message: "User tidak ditemukan" });
        
        res.json(results[0]);
    });
};

export const createUser = (req, res) => {
    const { nama, email, password } = req.body;

    db.query("INSERT INTO users (nama, email, password) VALUES (?, ?, ?)",
        [nama, email, password],
        (err, results) => {
            if (err) return res.status(500).json({ message: err });
            
            res.json({ id: results.insertId, nama, email });
        }
    );
};

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { nama, email } = req.body;

    db.query("UPDATE users SET nama=?, email=? WHERE id=?",
        [nama, email, id],
        (err, results) => {
            if (err) return res.status(500).json({ message: err });
            
            res.json({ message: "User berhasil diupdate" });
        }
    );
};

export const deleteUser = (req, res) => {
	const { id } = req.params;
	db.query("DELETE FROM users WHERE id=?", [id], (err, results) => {
		if (err) return res.status(500).json({ message: err });
		res.json({ message: "User berhasil dihapus" });
	});
};
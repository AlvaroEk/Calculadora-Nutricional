CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
CREATE TABLE comidas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    fecha DATE NOT NULL,
    comida VARCHAR(255) NOT NULL,
    calorias INT NOT NULL,
    proteinas DECIMAL(5, 2) NOT NULL,
    carbohidratos DECIMAL(5, 2) NOT NULL,
    grasas DECIMAL(5, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    INDEX idx_usuario_id (usuario_id)
);



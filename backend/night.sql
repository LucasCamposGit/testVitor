-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 16-Ago-2023 às 20:09
-- Versão do servidor: 10.4.25-MariaDB
-- versão do PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
--
-- Banco de dados: night
--

-- --------------------------------------------------------
--
-- Estrutura da tabela financeiro
--

CREATE TABLE financeiro (
  assessor varchar(255) NOT NULL,
  cliente varchar(255) NOT NULL,
  corretora varchar(225) NOT NULL,
  produto varchar(225) NOT NULL,
  ativo varchar(225) NOT NULL,
  receita_ideal float NOT NULL,
  receita_atual float NOT NULL
);

--
-- Extraindo dados da tabela financeiro
--

INSERT INTO financeiro (assessor, cliente, corretora, produto, ativo, receita_ideal, receita_atual) VALUES
('jose', 'jorge', 'xp', 'fii', 'fundo', 20000, 15000),
('maria', 'lais', 'pj2', 'rv', 'nvidia', 20000, 18000);

-- --------------------------------------------------------

--
-- Estrutura da tabela questionamento
--

CREATE TABLE questionamento (
  cliente varchar(255) NOT NULL,
  produto varchar(255) NOT NULL,
  receita varchar(255) NOT NULL,
  comentario varchar(1000) NOT NULL,
  status bool DEFAULT false,
  resposta varchar(1000) NOT NULL
);

--
-- Extraindo dados da tabela questionamento
--

INSERT INTO questionamento (cliente, produto, receita, comentario, status, resposta) VALUES
('asd', 'asd', 'asd', 'asd', NULL, 'asd'),
('asd', 'asd', 'asd', 'asd', 0, 'asd'),
('asd', 'asd', 'asd', 'asd', 0, 'asd'),
('asd', 'asd', 'asd', 'asd', 0, 'asd'),
('asd', 'asd', 'asd', 'asd', 0, 'asd');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

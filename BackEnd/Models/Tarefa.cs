using System;
using System.Collections.Generic;

namespace BackEnd.Models
{
    public class Tarefa
    {
        public Tarefa()
        {
            CriadoEm = DateTime.Now;
        }
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public string Importancia { get; set; }
        public string Local { get; set; }
        public string Quando { get; set; }
        public DateTime CriadoEm { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackEnd.Data;
using BackEnd.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
namespace BackEnd.Controllers
{
    [ApiController]
    [Route("api/tarefa")]
    public class TarefaController : ControllerBase
    {
        private readonly DataContext _context;
        public TarefaController(DataContext context)
        {
            _context = context;
        }
        
        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody]Tarefa tarefa)
        {
            _context.Tarefas.Add(tarefa);
            _context.SaveChanges();
            return Created("", tarefa);
        }
        [HttpGet]
        [Route("list")]
        public IActionResult List() => Ok(_context.Tarefas.ToList());
    }
}
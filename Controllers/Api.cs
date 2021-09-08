using EasyCard.Work;
using EasyCard.Work.Product;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EasyCard.Controllers
{
    [Route("[controller]")]
    public class Api : Controller
    {

        private readonly ILogger<Api> _logger;

        public Api(ILogger<Api> logger)
        {
            _logger = logger;
        }

        [Route("GetCategory")]
        [HttpGet]
        public JsonResult GetCategory()
        {
            return Json(CategoryManager.GetCategories());
        }

        [Route("GetProducts")]
        [HttpGet]
        public JsonResult GetProducts(int id, int offset = 0, int take = 0)
        {
            return Json(ProductManager.Get(id, offset, take));
        }

        [Route("AddCategory")]
        [HttpGet]
        public void AddCategory()
        {
            CategoryManager.AddCategories();
        }
    }
}

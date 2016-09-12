using Newtonsoft.Json;
using Prueba_Rappi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Prueba_Rappi.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetNews()
        {
            var news = JsonConvert.DeserializeObject<List<news_mock>>(System.Text.Encoding.UTF8.GetString(Properties.Resources.news_mock));
            return Json(news, JsonRequestBehavior.AllowGet);
        }
    }
}
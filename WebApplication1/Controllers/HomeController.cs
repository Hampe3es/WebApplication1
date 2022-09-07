using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data;
using WebApplication1.Models;


namespace WebApplication1.Controllers
{
    public class HomeController : Controller
    {

        DataBasesAcceslayer.db dblayer = new DataBasesAcceslayer.db();
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Menu()
        {
            return View();
        }

        public ActionResult Template()
        {
            return View();
        }

        public ActionResult Flexbox()
        {
            return View();
        }

        public ActionResult Grid()
        {
            return View();
        }

        public ActionResult Images()
        {
            return View();
        }

        public ActionResult Chart()
        {
            return View();
        }
        public JsonResult get_data()
        {
            DataSet ds = dblayer.Show_data();
            List<TestModel> listreg = new List<TestModel>();
            foreach (DataRow dr in ds.Tables[0].Rows)
            {
                listreg.Add(new TestModel
                {
                    Time = Convert.ToInt32(dr["Time"]),
                    Red = Convert.ToInt32(dr["Red"]),
                    Blue = Convert.ToInt32(dr["Blue"]),
                });
            }
            return Json(listreg, JsonRequestBehavior.AllowGet);
        }
    }
}
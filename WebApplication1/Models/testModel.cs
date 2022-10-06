using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class TestModel
    {
        public int PersonID { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }



        public int ID { get; set; }
        public string DeviceID { get; set; }
        public int Temperature { get; set; }
        public int Humidity { get; set; }
        public int RSSI { get; set; }
        public string Measure_Time { get; set; }
    }
}
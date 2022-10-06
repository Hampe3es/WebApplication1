using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Data.Odbc;
using System.Configuration;

namespace WebApplication1.DataBasesAcceslayer
{
    public class db
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["mscon"].ConnectionString);
        //SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["emcon"].ConnectionString);

        public DataSet Show_data()
        {
            SqlCommand com = new SqlCommand("Select * from Measurement where DeviceID='7c9ebd5b5e9c' and Humidity!=255", con);
            //SqlCommand com = new SqlCommand("Select * from data", con);
            SqlDataAdapter da = new SqlDataAdapter(com);
            DataSet ds = new DataSet();
            da.Fill(ds);
            return ds;
        }
    }
}
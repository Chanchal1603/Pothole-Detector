
using System.Net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Primitives;
using Newtonsoft.Json;
using System.Data.SqlClient;

public static async void  Run(HttpRequest req, ILogger log)
{
    log.LogInformation("C# HTTP trigger function processed a request.");

    string name = req.Query["name"];

    string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
    dynamic data = JsonConvert.DeserializeObject(requestBody);
    

var str = "Server=tcp:potholeserver.database.windows.net,1433;Initial Catalog=PotHoleDB;Persist Security Info=False;User ID=development;Password=password-1;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
    using (SqlConnection conn = new SqlConnection(str))
    {
      log.LogInformation("C# HTTP trigger function processed a request.-- open ");   
        conn.Open();
         log.LogInformation("C# HTTP trigger function processed a request.-- open next ");
        var text = "Insert into potholes(lattitude,longitude,isactive,createdtime,probability) values ('156.78','-314.768',1,getdate(),95.90)";
 log.LogInformation("C# HTTP trigger function processed a request.-- sql ");
        using (SqlCommand cmd = new SqlCommand(text, conn))
        {
             log.LogInformation("C# HTTP trigger function processed a request.-- exec cmd");
            // Execute the command and log the # rows affected.
            var rows = await cmd.ExecuteNonQueryAsync();
            log.LogInformation($"{rows} rows were updated");
        }
    }

    
}

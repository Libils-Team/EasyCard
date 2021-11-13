using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyCard.DAL.Context
{
    public static class SiteContextStatic
    {
        public static T Execute<T>(Func<Context, T> f)
        {
            using (var db = new Context())
                return f(db);
        }
    }
}

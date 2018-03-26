using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TodoListClient.Model
{
    class Upload
    {

        public Upload()
        {
            this.Total = 0;
            this.Passed = 0;
            this.Failed = 0;
            this.UploadExceptions = new List<UploadException>();
        }

        public int Total { get; set; }
        public int Passed { get; set; }
        public int Failed { get; set; }
        public List<UploadException> UploadExceptions { get; set; }

        public void Reset()
        {
            this.Total = 0;
            this.Passed = 0;
            this.Failed = 0;
            this.UploadExceptions = new List<UploadException>();
        }
        
        public void Start(int total)
        {
            this.Total = total;
            this.Passed = 0;
            this.Failed = 0;
            this.UploadExceptions = new List<UploadException>();
        }

        public bool isFinished()
        {
            return this.Total > 0 && this.Total == (this.Passed + this.Failed);
        }

        public bool HasErrors()
        {
            return this.Failed > 0;
        }
    }
}

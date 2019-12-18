using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BootStrapBlazor
{
    class SimpleEvent
    {
        public delegate void OnTrigger();
        public OnTrigger triggerDelegate;
        public void Trigger()
        {
            if(triggerDelegate != null)
            {
               triggerDelegate.Invoke();
            }
        }

        public string ID { get; set; }
    }

    class EventRegs
    {
        private static Dictionary<string, SimpleEvent> dict=new Dictionary<string, SimpleEvent>();

        public static bool RegEvent(SimpleEvent ev){
            if (dict.ContainsKey(ev.ID))
                return false;
            else
            {
                dict.Add(ev.ID, ev);
                return true;
            }
        }

        public  static void OnTrigger(string eventID)
        {
            dict[eventID].Trigger();
        }

    }
}

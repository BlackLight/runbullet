<script>
import Api from "@/utils/Api";
import Cookies from "@/utils/Cookies";
import DateTime from "@/utils/DateTime";
import Events from "@/utils/Events";
import Notification from "@/utils/Notification";
import Screen from "@/utils/Screen";
import Types from "@/utils/Types";

export default {
  name: "Utils",
  mixins: [Api, Cookies, Notification, Events, DateTime, Screen, Types],
}
</script>

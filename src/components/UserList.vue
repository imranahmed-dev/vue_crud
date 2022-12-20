<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="people-list" id="people-list">
          <div class="searches">
            <input class="form-control" type="text" placeholder="search" />
          </div>
          <ul class="list">

            <li @click="selectUser(user.id)" class="clearfix" v-for="user in messageStore.users" :key="user">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" alt="avatar" />
              <div class="about">
                <div class="name">{{ user.name }}</div>
                <div class="status">
                  <i class="fa fa-circle online"></i> online
                </div>
              </div>
            </li>

          </ul>
        </div>

      </div>
      <div class="col-md-8">
        <div class="chat">
          <div class="chat-header clearfix">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="avatar" />

            <div class="chat-about">
              <div class="chat-with">{{ messageStore.userMessage.user?.name }}</div>
              <div class="chat-num-messages">already 1 902 messages</div>
            </div>
            <i class="fa fa-star"></i>
          </div> <!-- end chat-header -->

          <div class="chat-history">
            <ul>

                <li class="clearfix" v-for="message in messageStore.userMessage.messages" :key="message">
              <template v-if="message.user.id == messageStore.userMessage.user.id">            
                <div class="message-data align-right">
                  <span class="message-data-time">{{ message.created_at }}</span> &nbsp; &nbsp;
                  <span class="message-data-name">{{ message.user?.name }}</span> <i class="fa fa-circle me"></i>

                </div>
                <div class="message other-message float-right">
                 {{ message.message }}
                </div>
              </template>
              <template v-else>
                <div class="message-data">
                  <span class="message-data-name"><i class="fa fa-circle online"></i> {{ message.user.name }}</span>
                  <span class="message-data-time">{{ message.created_at }}</span>
                </div>
                <div class="message my-message">
                  {{ message.message }}
                </div>
              </template>
              </li>


            </ul>

          </div> <!-- end chat-history -->

          <div class="chat-message clearfix">
          <form @submit.prevent="storeMessage()">
            <textarea v-model="messageData.message" id="message-to-send" placeholder="Type your message" rows="3"></textarea>

            <i class="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
            <i class="fa fa-file-image-o"></i>

            <button type="submit">Send</button>
            </form>

          </div> <!-- end chat-message -->

        </div>
      </div>
      <!-- end chat -->
    </div>



  </div> <!-- end container -->


</template>

<script setup>
import { useMessageStore } from "../store/message";
import { onMounted,reactive } from "vue";
const messageStore = useMessageStore();

const messageData = reactive({
  message: '',
  user_id: messageStore.userMessage.user.id ,
})

const selectUser = (id) => {
  messageStore.userMessages(id);
}

const storeMessage = (id) => {
  messageStore.storeMessage(messageData, () => {
    messageStore.userMessages(messageStore.userMessage.user.id);
    messageData.message = '';
  });
}


onMounted(() => {
  messageStore.getUsers();
});

</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Lato:400,700);


.people-list {
  padding: 30px;
  background: #f2f5f8;
  border-radius: 5px;
}




.people-list .search {
  padding: 20px;
}

.people-list .fa-search {
  position: relative;
  left: -25px;
}

.people-list ul {
  padding: 0;
  margin: 0;
  list-style: none;
  height: 770px;
}

.people-list ul li {
  margin: 20px 0;
    cursor: pointer;
    background: #ddd;
    padding: 5px 15px;
    border-radius: 5px;
}

.people-list img {
  float: left;
  float: left;
  height: 55px;
  width: 55px;
  border-radius: 50%;
}

.people-list .about {
  float: left;
  margin-top: 8px;
}

.people-list .about {
  padding-left: 8px;
}

.people-list .status {
  color: #92959e;
}

.chat {
  background: #f2f5f8;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #434651;
}

.chat .chat-header {
  padding: 20px;
  border-bottom: 2px solid white;
}

.chat .chat-header img {
  float: left;
}

.chat .chat-header .chat-about {
  float: left;
  padding-left: 10px;
  margin-top: 6px;
}

.chat .chat-header .chat-with {
  font-weight: bold;
  font-size: 16px;
}

.chat .chat-header .chat-num-messages {
  color: #92959e;
}

.chat .chat-header .fa-star {
  float: right;
  color: #d8dadf;
  font-size: 20px;
  margin-top: 12px;
}

.chat .chat-history {
  padding: 30px 30px 20px;
  border-bottom: 2px solid white;
  overflow-y: scroll;
  height: 575px;
}
.chat-history ul{
  list-style: none;
}

.chat .chat-history .message-data {
  margin-bottom: 15px;
}

.chat .chat-history .message-data-time {
  color: #a8aab1;
  padding-left: 6px;
}

.chat .chat-history .message {
  color: white;
  padding: 18px 20px;
  line-height: 26px;
  font-size: 16px;
  border-radius: 7px;
  margin-bottom: 30px;
  width: 90%;
  position: relative;
}

.chat .chat-history .message:after {
  bottom: 100%;
  left: 7%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-bottom-color: #86bb71;
  border-width: 10px;
  margin-left: -10px;
}

.chat .chat-history .my-message {
  background: #86bb71;
}

.chat .chat-history .other-message {
  background: #94c2ed;
}

.chat .chat-history .other-message:after {
  border-bottom-color: #94c2ed;
  left: 93%;
}

.chat .chat-message {
  padding: 30px;
}

.chat .chat-message textarea {
  width: 100%;
  border: none;
  padding: 10px 20px;
  font: 14px/22px "Lato", Arial, sans-serif;
  margin-bottom: 10px;
  border-radius: 5px;
  resize: none;
}

.chat .chat-message .fa-file-o,
.chat .chat-message .fa-file-image-o {
  font-size: 16px;
  color: gray;
  cursor: pointer;
}

.chat .chat-message button {
  float: right;
  color: #94c2ed;
  font-size: 16px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  font-weight: bold;
  background: #f2f5f8;
}

.chat .chat-message button:hover {
  color: #75b1e8;
}

.online,
.offline,
.me {
  margin-right: 3px;
  font-size: 10px;
}

.online {
  color: #86bb71;
}

.offline {
  color: #e38968;
}

.me {
  color: #94c2ed;
}

.align-left {
  text-align: left;
}

.align-right {
  text-align: right;
}

.float-right {
  float: right;
}

.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}
</style>

package lk.ijse.dep11.app.wscontroller;

import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

public class ChatWSController extends TextWebSocketHandler {

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        String responseMessage = "Project Work";
        session.sendMessage(new TextMessage(responseMessage));
    }
}

// 🔒 IMPORTANT
// Put your NEW ElevenLabs API key here — DO NOT share it anywhere.
const ELEVEN_API_KEY = "198db46669f877302e471689ba61ca0e77c1b4f9d153dd8574d53c5fbdcc81e6";

// Your Agent ID (safe to share)
const AGENT_ID = "agent_1701k9hdnqk1f338decvmmbsxfsa";

const startBtn = document.getElementById("startInterviewBtn");
const endBtn = document.getElementById("endInterviewBtn");
const modal = document.getElementById("interviewModal");
const agentContainer = document.getElementById("agentContainer");

startBtn.addEventListener("click", () => {
    modal.style.display = "block";

    agentContainer.innerHTML = `
        <elevenlabs-convai 
            agent-id="${AGENT_ID}" 
            api-key="${ELEVEN_API_KEY}"
        ></elevenlabs-convai>
    `;
});

endBtn.addEventListener("click", () => {
    modal.style.display = "none";
    agentContainer.innerHTML = "";
});

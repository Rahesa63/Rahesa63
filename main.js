function encodeForUrl(str) {
  return encodeURIComponent(str);
}

async function sendMessage() {
  const messageInput = document.getElementById('messageInput');
  const messageDisplay = document.getElementById('messageDisplay');

  const message = messageInput.value.trim().toLowerCase();

  if (message === "minta pap") {
    messageDisplay.innerText = "🖕"
  } else if (message === "pap sexy") {
    messageDisplay.innerText = "Gagal memproses Pesan";
  } else if (message !== "") {
    messageDisplay.innerText = "........";
    const query = encodeForUrl(message);
    const prompt = `"${query}"`;

    try {
      const { data } = await axios.get(`https://nash-api-end.onrender.com/gemini?prompt=${prompt}`);
      const reply = data.response;
      messageDisplay.innerText = `Pesan: ${messageInput.value}\nGPT: ${reply}`;
      messageInput.value = "";
    } catch (error) {
      console.error('Error fetching reply:', error);
      messageDisplay.innerText = "Terjadi Kesalahan Coba Lagi nanti";
    }
  } else {
    messageDisplay.innerText = "Tuliskan Pesan nya Tuan";
  }
    }

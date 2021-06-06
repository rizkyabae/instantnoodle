function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "siap") {
        return "Langkah Pertama siapkan alat dan bahan seperti mie, bumbu, panci, air 300 ml, piring, sendok, garpu, dan gunting. Apakah sudah?";
    } else if (input == "sudah") {
        return "Baik, untuk kematangan setengah matang atau matang?";
    } else if (input == "matang") {
        return "Anda memilih matang, Sekarang siapkan panci dan isikan air 300ml lalu seduh, apakah bisa dilanjutkan?";
    } else if (input == "lanjut") {
        return "Masukan Mie Instant dan tunggu selama 3-4 menit, sambil menunggu masukan bumbu instant kedalam piring, apakah sudah?";
    } else if (input == "lanjutkan") {
        return "Setelah matang mie ditiriskan dan masukan kedalam piring lalu aduk rata, apakah sudah?";
    } else if (input == "selanjutnya") {
        return "Bagaimana tingkat kematangan dan rasa?";
    } else if (input == "sempurna") {
        return "Baik apakah ada lagi yang mau dibantu?";
    } else if (input == "tidak") {
        return "Baik Terimakasih, sampai jumpa!";
    } else {
        return "masukan input yang sesuai!";
    }
}
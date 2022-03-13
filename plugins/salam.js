let handler = async m => m.reply(`
وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
Waalaikumsalam Warahmatullahi Wabarakatuh
`.trim()) // Tambah sendiri kalo mau
handler.command = /^Assalamualaikum$/i
handler.command = /^Samlekom$/i
handler.command = /^اَلسَّلَامُ عَلَيْكُمْ$/i

module.exports = handler


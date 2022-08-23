enum BankType {
   Bank = "銀行",
   Credit_Union = "信用合作社",
   Farmers = "農會",
   Fisherperson = "漁會",
   Post = "郵局",
}

export const BankData: BankCodeType[] = [
   {
      code: "003",
      cn_name: "交通銀行",
      en_name: "Bank of Communications",
      link: "https://www.bankcomm.com.tw/",
      tag: BankType.Bank,
   },
   {
      code: "004",
      cn_name: "台灣銀行",
      en_name: "Bank of Taiwan",
      link: "https://www.bot.com.tw",
      tag: BankType.Bank,
   },
];

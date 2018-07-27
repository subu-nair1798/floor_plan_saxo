import {save_plan} from './Storage';

export function save_data () {
  let emp_ar = [
    {
      "emp_name": "Yuzhen He (XYUZH)",
      "emp_id": "XYUZH"
    },
    {
      "emp_name": "Sanjay Yadav (XSANY)",
      "emp_id": "XSANY"
    },
    {
      "emp_name": "Jatin Khurana (JATK)",
      "emp_id": "JATK"
    },
    {
      "emp_name": "Surbhi Solanki (SUSO)",
      "emp_id": "SUSO"
    },
    {
      "emp_name": "Syed Ahmad Mushtaq (SYEM)",
      "emp_id": "SYEM"
    },
    {
      "emp_name": "Sumit Kumar Garg (XSUMG)",
      "emp_id": "XSUMG"
    },
    {
      "emp_name": "Mohammad Ataullah (MOAT)",
      "emp_id": "MOAT"
    },
    {
      "emp_name": "Vikas Ojha (VIKO)",
      "emp_id": "VIKO"
    },
    {
      "emp_name": "Arsh Khurana (XARSK)",
      "emp_id": "XARSK"
    },
    {
      "emp_name": "Rajni Kumari (RAKU)",
      "emp_id": "RAKU"
    },
    {
      "emp_name": "Amit Bhandari (AMBH)",
      "emp_id": "AMBH"
    },
    {
      "emp_name": "Lokesh Rawat (XLOKR)",
      "emp_id": "XLOKR"
    },
    {
      "emp_name": "Damini Bhardwaj (XDAMB)",
      "emp_id": "XDAMB"
    },
    {
      "emp_name": "Sheelam Gupta (SHEG)",
      "emp_id": "SHEG"
    },
    {
      "emp_name": "Tejas Palan (TEJP)",
      "emp_id": "TEJP"
    },
    {
      "emp_name": "Avinash Mishra (AVIM)",
      "emp_id": "AVIM"
    },
    {
      "emp_name": "Saurabh Singla (SAUI)",
      "emp_id": "SAUI"
    },
    {
      "emp_name": "Surbhi Tewari (XSURT)",
      "emp_id": "XSURT"
    },
    {
      "emp_name": "Zaki Ahmad (ZAKA)",
      "emp_id": "ZAKA"
    },
    {
      "emp_name": "Deepesh Dutta (DEED)",
      "emp_id": "DEED"
    },
    {
      "emp_name": "Prakash Chandra Nayak (PRAN)",
      "emp_id": "PRAN"
    },
    {
      "emp_name": "Rajesh Kumar Srivastava (RAJS)",
      "emp_id": "RAJS"
    },
    {
      "emp_name": "Sakshi Arora (SAAR)",
      "emp_id": "SAAR"
    },
    {
      "emp_name": "Antulika Garg (ANTG)",
      "emp_id": "ANTG"
    },
    {
      "emp_name": "Mohit Sonkar (MOSO)",
      "emp_id": "MOSO"
    },
    {
      "emp_name": "Shri Krishna Sharma (SHRS)",
      "emp_id": "SHRS"
    },
    {
      "emp_name": "Imran Khan (XIMRK)",
      "emp_id": "XIMRK"
    },
    {
      "emp_name": "Hrishi Kant Upadhyay (XHRIU)",
      "emp_id": "XHRIU"
    },
    {
      "emp_name": "Manish Chandwani (MCHA)",
      "emp_id": "MCHA"
    },
    {
      "emp_name": "Priyanka Raghav (PRIR)",
      "emp_id": "PRIR"
    },
    {
      "emp_name": "Yatin Gupta (XYATG)",
      "emp_id": "XYATG"
    },
    {
      "emp_name": "Nitin Gupta (XNITG)",
      "emp_id": "XNITG"
    },
    {
      "emp_name": "Himanshu Saini (XHIMS)",
      "emp_id": "XHIMS"
    },
    {
      "emp_name": "Puneet Sehgal (PSEH)",
      "emp_id": "PSEH"
    },
    {
      "emp_name": "Waqaar Rasool (WAQR)",
      "emp_id": "WAQR"
    },
    {
      "emp_name": "Saurabh Gupta (XSAUG)",
      "emp_id": "XSAUG"
    },
    {
      "emp_name": "Subramaniam Kazhuparambil (XSUBK)",
      "emp_id": "XSUBK"
    },
    {
      "emp_name": "Kanwar Devinder Singh (KANS)",
      "emp_id": "KANS"
    },
    {
      "emp_name": "Surbhi Gupta (SURG)",
      "emp_id": "SURG"
    },
    {
      "emp_name": "Saurabh Nautiyal (SNAU)",
      "emp_id": "SNAU"
    },
    {
      "emp_name": "Himanshu Meena (HIMM)",
      "emp_id": "HIMM"
    },
    {
      "emp_name": "Sonakshi Ranjan (XSONR)",
      "emp_id": "XSONR"
    },
    {
      "emp_name": "Arun Kumar (ARUK)",
      "emp_id": "ARUK"
    },
    {
      "emp_name": "Chandrayog Yadav (CHAY)",
      "emp_id": "CHAY"
    },
    {
      "emp_name": "Reshma Ghuliani (RESG)",
      "emp_id": "RESG"
    },
    {
      "emp_name": "Naresh Khanna (NARK)",
      "emp_id": "NARK"
    },
    {
      "emp_name": "Marut Awasthi (XMAAW)",
      "emp_id": "XMAAW"
    },
    {
      "emp_name": "Sahil Gujral (SAHG)",
      "emp_id": "SAHG"
    },
    {
      "emp_name": "Puneet Arora (PUNA)",
      "emp_id": "PUNA"
    },
    {
      "emp_name": "Shweta Dixit (SHWD)",
      "emp_id": "SHWD"
    },
    {
      "emp_name": "Jay Prakash Upadhyay (JAYU)",
      "emp_id": "JAYU"
    },
    {
      "emp_name": "R Srinivas Naidu (XSRNA)",
      "emp_id": "XSRNA"
    },
    {
      "emp_name": "Anshul Mehra (ANSM)",
      "emp_id": "ANSM"
    },
    {
      "emp_name": "Manu Sharma (MANU)",
      "emp_id": "MANU"
    },
    {
      "emp_name": "Supriyaa Rettiganti (SUPR)",
      "emp_id": "SUPR"
    },
    {
      "emp_name": "Abhishek Nandwani (ABHN)",
      "emp_id": "ABHN"
    },
    {
      "emp_name": "Md Shamim Ahmed (MDSH)",
      "emp_id": "MDSH"
    },
    {
      "emp_name": "Dharmendra Kumar (DHAK)",
      "emp_id": "DHAK"
    },
    {
      "emp_name": "Khushboo Nagpal (KHUN)",
      "emp_id": "KHUN"
    },
    {
      "emp_name": "Vaibhav Gupta (VAIG)",
      "emp_id": "VAIG"
    },
    {
      "emp_name": "Sanjiv Pandey (SANJ)",
      "emp_id": "SANJ"
    },
    {
      "emp_name": "Manish Joshi (MJOS)",
      "emp_id": "MJOS"
    },
    {
      "emp_name": "Rajat Goyal (XRAJG)",
      "emp_id": "XRAJG"
    },
    {
      "emp_name": "Ashutosh Mishra (ASHM)",
      "emp_id": "ASHM"
    },
    {
      "emp_name": "Bhanu Pratap Singh Chouhan (XBHAC)",
      "emp_id": "XBHAC"
    },
    {
      "emp_name": "Bharat Verma (BHAV)",
      "emp_id": "BHAV"
    },
    {
      "emp_name": "Apoorva Kapoor (XAPOK)",
      "emp_id": "XAPOK"
    },
    {
      "emp_name": "Nikhil Kumar Dubey (NIKD)",
      "emp_id": "NIKD"
    },
    {
      "emp_name": "Abhishek Singh (MXTE)",
      "emp_id": "MXTE"
    },
    {
      "emp_name": "Nupur Adlakha (NUPA)",
      "emp_id": "NUPA"
    },
    {
      "emp_name": "Dhruv Joshi (DHRJ)",
      "emp_id": "DHRJ"
    },
    {
      "emp_name": "Lipika Mohanty (XLIPM)",
      "emp_id": "XLIPM"
    },
    {
      "emp_name": "Avanish Tomar (XAVAT)",
      "emp_id": "XAVAT"
    },
    {
      "emp_name": "Shrey Rana (SHRR)",
      "emp_id": "SHRR"
    },
    {
      "emp_name": "Chintan Gupta (CHIG)",
      "emp_id": "CHIG"
    },
    {
      "emp_name": "Bhavesh Kumar Tomer (XBHAT)",
      "emp_id": "XBHAT"
    },
    {
      "emp_name": "Vibhu Chugh (XVIBH)",
      "emp_id": "XVIBH"
    },
    {
      "emp_name": "Shuchi Tyagi (SHUT)",
      "emp_id": "SHUT"
    },
    {
      "emp_name": "Neeti Dubey (NEED)",
      "emp_id": "NEED"
    },
    {
      "emp_name": "Vikram Gupta (VIKG)",
      "emp_id": "VIKG"
    },
    {
      "emp_name": "Jatin Batra (JATB)",
      "emp_id": "JATB"
    },
    {
      "emp_name": "Anjul Gupta (ANJG)",
      "emp_id": "ANJG"
    },
    {
      "emp_name": "Varsha Ghosh (XVARG)",
      "emp_id": "XVARG"
    },
    {
      "emp_name": "Dhanajay Singh (XDHAS)",
      "emp_id": "XDHAS"
    },
    {
      "emp_name": "Prashant Goyal (PRAG)",
      "emp_id": "PRAG"
    },
    {
      "emp_name": "Dipti Zalpori (XDIPZ)",
      "emp_id": "XDIPZ"
    },
    {
      "emp_name": "Abhishek Saxena (XABSA)",
      "emp_id": "XABSA"
    },
    {
      "emp_name": "Saket Modi (XSAMO)",
      "emp_id": "XSAMO"
    },
    {
      "emp_name": "Gaurav Puri (XGAUP)",
      "emp_id": "XGAUP"
    },
    {
      "emp_name": "Sahil Kumar (XSAHK)",
      "emp_id": "XSAHK"
    },
    {
      "emp_name": "Ranjana Dixit (XRDIX)",
      "emp_id": "XRDIX"
    },
    {
      "emp_name": "Roop Basant (ROOK)",
      "emp_id": "ROOK"
    },
    {
      "emp_name": "Sidharth Sharma (SIDS)",
      "emp_id": "SIDS"
    },
    {
      "emp_name": "Vinod Singh Gurjar (VGUR)",
      "emp_id": "VGUR"
    },
    {
      "emp_name": "Anu Devi (ANUD)",
      "emp_id": "ANUD"
    },
    {
      "emp_name": "Sonal Singla (SOSI)",
      "emp_id": "SOSI"
    },
    {
      "emp_name": "Parthasarathi Mukherjee (PARM)",
      "emp_id": "PARM"
    },
    {
      "emp_name": "Tarun Gupta (TARG)",
      "emp_id": "TARG"
    },
    {
      "emp_name": "Pratyush Kumar Rai (PRRA)",
      "emp_id": "PRRA"
    },
    {
      "emp_name": "Gaurav Bhatia (GAUB)",
      "emp_id": "GAUB"
    },
    {
      "emp_name": "Mohit Maheshwari (XMMAH)",
      "emp_id": "XMMAH"
    },
    {
      "emp_name": "Himanshu Gupta (HIMG)",
      "emp_id": "HIMG"
    },
    {
      "emp_name": "Manisha Chopra (MANC)",
      "emp_id": "MANC"
    },
    {
      "emp_name": "Sushant Pandey (XSUSP)",
      "emp_id": "XSUSP"
    },
    {
      "emp_name": "Ramneek Goyal (RAGO)",
      "emp_id": "RAGO"
    },
    {
      "emp_name": "Abheek Jandial (XABHJ)",
      "emp_id": "XABHJ"
    },
    {
      "emp_name": "SAPAN KAUR (XSAPK)",
      "emp_id": "XSAPK"
    },
    {
      "emp_name": "Vivek Sharma (XVIVS)",
      "emp_id": "XVIVS"
    },
    {
      "emp_name": "Rishi Raj Chaturvedi (RISC)",
      "emp_id": "RISC"
    },
    {
      "emp_name": "Praveen Dixit (PRAD)",
      "emp_id": "PRAD"
    },
    {
      "emp_name": "Yana Aniskovtseva (XYANA)",
      "emp_id": "XYANA"
    },
    {
      "emp_name": "Shiv Kumar (XSHKU)",
      "emp_id": "XSHKU"
    },
    {
      "emp_name": "Mamta Rawat (XMAMR)",
      "emp_id": "XMAMR"
    },
    {
      "emp_name": "Ankit Narang (XANKN)",
      "emp_id": "XANKN"
    },
    {
      "emp_name": "Abhimanyu Kumar (XABKU)",
      "emp_id": "XABKU"
    },
    {
      "emp_name": "Sonam Garg (SONG)",
      "emp_id": "SONG"
    },
    {
      "emp_name": "Pooja Prajapati Reddy (PORE)",
      "emp_id": "PORE"
    },
    {
      "emp_name": "Sonam Lakshmi (XSONL)",
      "emp_id": "XSONL"
    },
    {
      "emp_name": "Manish Kumar (XMANK)",
      "emp_id": "XMANK"
    },
    {
      "emp_name": "Aastha Kapoor (XAASK)",
      "emp_id": "XAASK"
    },
    {
      "emp_name": "Sandeep Goyal (SAGO)",
      "emp_id": "SAGO"
    },
    {
      "emp_name": "Banita Bisht (BIBA)",
      "emp_id": "BIBA"
    },
    {
      "emp_name": "Garima Goswami (XGAGO)",
      "emp_id": "XGAGO"
    },
    {
      "emp_name": "Ankit Gupta (ANGU)",
      "emp_id": "ANGU"
    },
    {
      "emp_name": "Sarika Kansal (XSARK)",
      "emp_id": "XSARK"
    },
    {
      "emp_name": "Sakshi Mittal (XSAKM)",
      "emp_id": "XSAKM"
    },
    {
      "emp_name": "Prateek Parihar (XPRAP)",
      "emp_id": "XPRAP"
    },
    {
      "emp_name": "Kanchan Gupta (XKANG)",
      "emp_id": "XKANG"
    },
    {
      "emp_name": "Mohit Agarwal (XMOAG)",
      "emp_id": "XMOAG"
    },
    {
      "emp_name": "Anshika Mittal (XANSM)",
      "emp_id": "XANSM"
    },
    {
      "emp_name": "Abhas Gupta (AYHK)",
      "emp_id": "AYHK"
    },
    {
      "emp_name": "Jay Sharma (JASH)",
      "emp_id": "JASH"
    },
    {
      "emp_name": "Muskan Babbar (XMUSB)",
      "emp_id": "XMUSB"
    },
    {
      "emp_name": "Deachen Lamo (XDEAL)",
      "emp_id": "XDEAL"
    },
    {
      "emp_name": "Manisha . (XMMAN)",
      "emp_id": "XMMAN"
    },
    {
      "emp_name": "Hitesh Garg (HITG)",
      "emp_id": "HITG"
    },
    {
      "emp_name": "Anchal Agrawal (ANCA)",
      "emp_id": "ANCA"
    },
    {
      "emp_name": "Deepa Chandola (DECH)",
      "emp_id": "DECH"
    },
    {
      "emp_name": "Vivek Rai (XVIVR)",
      "emp_id": "XVIVR"
    },
    {
      "emp_name": "Rohit Kumar (ROHK)",
      "emp_id": "ROHK"
    },
    {
      "emp_name": "ISHAN GARG (ISHG)",
      "emp_id": "ISHG"
    },
    {
      "emp_name": "Alpika Nath (ALPN)",
      "emp_id": "ALPN"
    },
    {
      "emp_name": "Gunjan Acharjee (XGUNA)",
      "emp_id": "XGUNA"
    },
    {
      "emp_name": "Abhishek Gupta (XABGU)",
      "emp_id": "XABGU"
    },
    {
      "emp_name": "Vivek Grover (VIGR)",
      "emp_id": "VIGR"
    },
    {
      "emp_name": "Sumit Jangir (XSUMJ)",
      "emp_id": "XSUMJ"
    },
    {
      "emp_name": "Piyush Negi (XPIYN)",
      "emp_id": "XPIYN"
    },
    {
      "emp_name": "K Tasleem Tasleem (XTAST)",
      "emp_id": "XTAST"
    },
    {
      "emp_name": "Vivek Kumar (XVIVK)",
      "emp_id": "XVIVK"
    },
    {
      "emp_name": "Aman Mirza (XAMMI)",
      "emp_id": "XAMMI"
    },
    {
      "emp_name": "Gunjan Madan (XGUNM)",
      "emp_id": "XGUNM"
    },
    {
      "emp_name": "Sakshi Nirmal (XSAKN)",
      "emp_id": "XSAKN"
    },
    {
      "emp_name": "Shivam Chaturvedi (XSHIC)",
      "emp_id": "XSHIC"
    },
    {
      "emp_name": "Naman Sharma (XNAMS)",
      "emp_id": "XNAMS"
    },
    {
      "emp_name": "Sumeet Kumar (XSUMK)",
      "emp_id": "XSUMK"
    },
    {
      "emp_name": "Harshita Malhotra (XHARM)",
      "emp_id": "XHARM"
    },
    {
      "emp_name": "Md Mahfooz Alam (XMDMA)",
      "emp_id": "XMDMA"
    },
    {
      "emp_name": "Badre Alam (XBADA)",
      "emp_id": "XBADA"
    },
    {
      "emp_name": "Namrata Nangia (XNAMN)",
      "emp_id": "XNAMN"
    },
    {
      "emp_name": "Deepanshu Dhindhwal (XDEED)",
      "emp_id": "XDEED"
    },
    {
      "emp_name": "Soham Ghosh (XSOHG)",
      "emp_id": "XSOHG"
    },
    {
      "emp_name": "Sunny Soni (SUNS)",
      "emp_id": "SUNS"
    },
    {
      "emp_name": "Shashank Kumar (SKUM)",
      "emp_id": "SKUM"
    },
    {
      "emp_name": "Asheesh Garg (AGAR)",
      "emp_id": "AGAR"
    },
    {
      "emp_name": "Deep Mehra (DEEM)",
      "emp_id": "DEEM"
    },
    {
      "emp_name": "Tanu Shukla (XTASH)",
      "emp_id": "XTASH"
    },
    {
      "emp_name": "Tarang Gupta (XTARG)",
      "emp_id": "XTARG"
    },
    {
      "emp_name": "Kanika Thakur (XKATH)",
      "emp_id": "XKATH"
    },
    {
      "emp_name": "Rohit Sharma (ROSH)",
      "emp_id": "ROSH"
    },
    {
      "emp_name": "Nitasha Sachdeva (NSAC)",
      "emp_id": "NSAC"
    },
    {
      "emp_name": "Kapil Dev Joshi (XKJOS)",
      "emp_id": "XKJOS"
    },
    {
      "emp_name": "Sachin Nagpal (XSACN)",
      "emp_id": "XSACN"
    },
    {
      "emp_name": "Megha Goel (MEGG)",
      "emp_id": "MEGG"
    },
    {
      "emp_name": "Vishal Upadhyay (VISU)",
      "emp_id": "VISU"
    },
    {
      "emp_name": "Rahul Vashistha (RAHV)",
      "emp_id": "RAHV"
    },
    {
      "emp_name": "Gaurav Dubey (GAUD)",
      "emp_id": "GAUD"
    },
    {
      "emp_name": "Kulbinder Singh (KUSN)",
      "emp_id": "KUSN"
    },
    {
      "emp_name": "Gaurav Saini (GASA)",
      "emp_id": "GASA"
    },
    {
      "emp_name": "Shashank Singh (SING)",
      "emp_id": "SING"
    },
    {
      "emp_name": "Kapil Gupta (KAPG)",
      "emp_id": "KAPG"
    },
    {
      "emp_name": "Mohit Rajpal (MOHR)",
      "emp_id": "MOHR"
    },
    {
      "emp_name": "Jitendra Kumar Tyagi (JITT)",
      "emp_id": "JITT"
    },
    {
      "emp_name": "Pranjal Singh (PRAS)",
      "emp_id": "PRAS"
    },
    {
      "emp_name": "VIkas Saxena (XVIKS)",
      "emp_id": "XVIKS"
    },
    {
      "emp_name": "Shivi Singh (XSHIS)",
      "emp_id": "XSHIS"
    },
    {
      "emp_name": "Prabhat Kumar Singh (XPRAS)",
      "emp_id": "XPRAS"
    },
    {
      "emp_name": "Sachin Kalra (SKAL)",
      "emp_id": "SKAL"
    },
    {
      "emp_name": "Neeraj Meena (NEEM)",
      "emp_id": "NEEM"
    },
    {
      "emp_name": "Naresh Dhami (NARD)",
      "emp_id": "NARD"
    },
    {
      "emp_name": "Sunil Tiwari (SUTI)",
      "emp_id": "SUTI"
    },
    {
      "emp_name": "Deachen Angmo (XDEAA)",
      "emp_id": "XDEAA"
    },
    {
      "emp_name": "Daljit Singh (XDALS)",
      "emp_id": "XDALS"
    },
    {
      "emp_name": "Mandeep Singh (MSIN)",
      "emp_id": "MSIN"
    },
    {
      "emp_name": "Rahool Suhas Joshi (RJOS)",
      "emp_id": "RJOS"
    },
    {
      "emp_name": "Omendra Pandey (OMEP)",
      "emp_id": "OMEP"
    },
    {
      "emp_name": "Arun Divakaran (ARDI)",
      "emp_id": "ARDI"
    },
    {
      "emp_name": "Abhilash Sharma (ABSH)",
      "emp_id": "ABSH"
    },
    {
      "emp_name": "Sanjay Adhikari (SANA)",
      "emp_id": "SANA"
    },
    {
      "emp_name": "Anoop Jayaraj (ANOJ)",
      "emp_id": "ANOJ"
    },
    {
      "emp_name": "Pramod Kumar Tiwari (PRTI)",
      "emp_id": "PRTI"
    },
    {
      "emp_name": "Shiefalika Kalra (SHIK)",
      "emp_id": "SHIK"
    },
    {
      "emp_name": "Smita Tanwar (SMIT)",
      "emp_id": "SMIT"
    },
    {
      "emp_name": "Preeti Sharma (XPRES)",
      "emp_id": "XPRES"
    },
    {
      "emp_name": "Upasana Khattar (XUPAK)",
      "emp_id": "XUPAK"
    },
    {
      "emp_name": "Surojit Sengupta (SURO)",
      "emp_id": "SURO"
    },
    {
      "emp_name": "Jasmine Kamra (JASK)",
      "emp_id": "JASK"
    },
    {
      "emp_name": "Chandan Dutta (CHAD)",
      "emp_id": "CHAD"
    },
    {
      "emp_name": "Ankit Bachhawat (ABAC)",
      "emp_id": "ABAC"
    },
    {
      "emp_name": "Vibhuti Sharma (VIBS)",
      "emp_id": "VIBS"
    },
    {
      "emp_name": "Niraj Singh (NISI)",
      "emp_id": "NISI"
    },
    {
      "emp_name": "Prabhaat Tiwari (PRAT)",
      "emp_id": "PRAT"
    },
    {
      "emp_name": "Saurabh Awasthi (XSAAW)",
      "emp_id": "XSAAW"
    },
    {
      "emp_name": "Abhidipta Mukherjee (XABHM)",
      "emp_id": "XABHM"
    },
    {
      "emp_name": "Anupam Gupta (ANUG)",
      "emp_id": "ANUG"
    },
    {
      "emp_name": "Kushagra Mittal (XKUSM)",
      "emp_id": "XKUSM"
    },
    {
      "emp_name": "Santosh Gupta (SANG)",
      "emp_id": "SANG"
    },
    {
      "emp_name": "Govind Mendiratta (GOVM)",
      "emp_id": "GOVM"
    },
    {
      "emp_name": "Amit Gulati (AMIG)",
      "emp_id": "AMIG"
    },
    {
      "emp_name": "Kanika Kapoor (KANK)",
      "emp_id": "KANK"
    },
    {
      "emp_name": "Sarthak Bhardwaj (SABH)",
      "emp_id": "SABH"
    },
    {
      "emp_name": "Sakshi Raina (SAKR)",
      "emp_id": "SAKR"
    },
    {
      "emp_name": "Hemant Kumar Sharma (HESH)",
      "emp_id": "HESH"
    },
    {
      "emp_name": "Divya Sharma (DIVS)",
      "emp_id": "DIVS"
    },
    {
      "emp_name": "Vineet Kumar (XVINK)",
      "emp_id": "XVINK"
    },
    {
      "emp_name": "Sudhanshu Juyal (SUDJ)",
      "emp_id": "SUDJ"
    },
    {
      "emp_name": "Bhawna Girotra (BHGI)",
      "emp_id": "BHGI"
    },
    {
      "emp_name": "Ashish Garg (ASGA)",
      "emp_id": "ASGA"
    },
    {
      "emp_name": "Ayushi Gupta (AYUG)",
      "emp_id": "AYUG"
    },
    {
      "emp_name": "Lakshay Bansal (LAKB)",
      "emp_id": "LAKB"
    },
    {
      "emp_name": "Tapan Jain (TAPJ)",
      "emp_id": "TAPJ"
    },
    {
      "emp_name": "Mohit Mutneja (MOMU)",
      "emp_id": "MOMU"
    },
    {
      "emp_name": "Sahil . (SASA)",
      "emp_id": "SASA"
    },
    {
      "emp_name": "Aakash Kumar (AAKK)",
      "emp_id": "AAKK"
    },
    {
      "emp_name": "Priyanka Sharma (PRIS)",
      "emp_id": "PRIS"
    },
    {
      "emp_name": "Dipali Sharma (DIPS)",
      "emp_id": "DIPS"
    },
    {
      "emp_name": "Vinod Yadav (VINY)",
      "emp_id": "VINY"
    },
    {
      "emp_name": "Nikita Beriwal (NIBE)",
      "emp_id": "NIBE"
    },
    {
      "emp_name": "Juhi Singh (JUHS)",
      "emp_id": "JUHS"
    },
    {
      "emp_name": "Apurva Jain (APUJ)",
      "emp_id": "APUJ"
    },
    {
      "emp_name": "Mohit Mehta (MOHM)",
      "emp_id": "MOHM"
    },
    {
      "emp_name": "Ankita jain (XANKJ)",
      "emp_id": "XANKJ"
    },
    {
      "emp_name": "Yadavendra Kumar Yadav (XYADY)",
      "emp_id": "XYADY"
    },
    {
      "emp_name": "Nishant Kumar (XNISK)",
      "emp_id": "XNISK"
    },
    {
      "emp_name": "Jolly Jain (JOLJ)",
      "emp_id": "JOLJ"
    },
    {
      "emp_name": "Saurabh Gupta (SAUG)",
      "emp_id": "SAUG"
    },
    {
      "emp_name": "Sharun Somani (SHSO)",
      "emp_id": "SHSO"
    },
    {
      "emp_name": "Vivek Kumar (VIVK)",
      "emp_id": "VIVK"
    },
    {
      "emp_name": "Rajeswari Alagarsamy (RAAL)",
      "emp_id": "RAAL"
    },
    {
      "emp_name": "Abhishek Singh (ABSI)",
      "emp_id": "ABSI"
    },
    {
      "emp_name": "Vinay Gosain (VING)",
      "emp_id": "VING"
    },
    {
      "emp_name": "Dinesh Charan (DINC)",
      "emp_id": "DINC"
    },
    {
      "emp_name": "Deeksha Gupta (DEGU)",
      "emp_id": "DEGU"
    },
    {
      "emp_name": "Manish Ahuja (MANA)",
      "emp_id": "MANA"
    },
    {
      "emp_name": "Amit Kumar Jain (AMIJ)",
      "emp_id": "AMIJ"
    },
    {
      "emp_name": "Sachin Chauhan (SACC)",
      "emp_id": "SACC"
    },
    {
      "emp_name": "Priyanka Karolia (PRIK)",
      "emp_id": "PRIK"
    },
    {
      "emp_name": "Megha Jain (MEGJ)",
      "emp_id": "MEGJ"
    },
    {
      "emp_name": "Apoorv Gupta (APOG)",
      "emp_id": "APOG"
    },
    {
      "emp_name": "Siddharth Kalra (SIDK)",
      "emp_id": "SIDK"
    },
    {
      "emp_name": "Ankit Sahu (XANKS)",
      "emp_id": "XANKS"
    },
    {
      "emp_name": "Mohit Kumar Srivastava (MRW)",
      "emp_id": "MRW"
    },
    {
      "emp_name": "Pawan Singh Tanwar (XTANS)",
      "emp_id": "XTANS"
    },
    {
      "emp_name": "Rajat Agarwal (RAJA)",
      "emp_id": "RAJA"
    },
    {
      "emp_name": "Divya Joshi (DIVJ)",
      "emp_id": "DIVJ"
    },
    {
      "emp_name": "Sankalp Pandey (SPAN)",
      "emp_id": "SPAN"
    },
    {
      "emp_name": "Manish Batra (MANB)",
      "emp_id": "MANB"
    },
    {
      "emp_name": "Shubhi Shubhi (SHUS)",
      "emp_id": "SHUS"
    },
    {
      "emp_name": "Siddharth Mittal (XSIDM)",
      "emp_id": "XSIDM"
    },
    {
      "emp_name": "Ranjan Kumar Dubey (RADU)",
      "emp_id": "RADU"
    },
    {
      "emp_name": "Rajesh Kumar (XRAKU)",
      "emp_id": "XRAKU"
    },
    {
      "emp_name": "Faiz Ahmad (FAIA)",
      "emp_id": "FAIA"
    },
    {
      "emp_name": "Ankush Taneja (XANKT)",
      "emp_id": "XANKT"
    },
    {
      "emp_name": "Ajay Arya (AJAA)",
      "emp_id": "AJAA"
    },
    {
      "emp_name": "Nitin . (NITK)",
      "emp_id": "NITK"
    },
    {
      "emp_name": "Kapil Upadhyay (KAPU)",
      "emp_id": "KAPU"
    },
    {
      "emp_name": "Gurneet Chadha (GURC)",
      "emp_id": "GURC"
    },
    {
      "emp_name": "Sangeeta Sharma (XSANS)",
      "emp_id": "XSANS"
    },
    {
      "emp_name": "Tushar Chandra (TUSC)",
      "emp_id": "TUSC"
    },
    {
      "emp_name": "Vishal Kumar (VKUM)",
      "emp_id": "VKUM"
    },
    {
      "emp_name": "Naveen Kumar (NAKU)",
      "emp_id": "NAKU"
    },
    {
      "emp_name": "Hitendra Kumar Saini (HITS)",
      "emp_id": "HITS"
    },
    {
      "emp_name": "Rohit Dhar (ROHD)",
      "emp_id": "ROHD"
    },
    {
      "emp_name": "Priyanka Bhat (PRIB)",
      "emp_id": "PRIB"
    },
    {
      "emp_name": "Deepak Gera (DEGE)",
      "emp_id": "DEGE"
    },
    {
      "emp_name": "Achin Maheshwari (ACHM)",
      "emp_id": "ACHM"
    },
    {
      "emp_name": "Karan Singh (KARA)",
      "emp_id": "KARA"
    },
    {
      "emp_name": "Jatin Sharma (JATS)",
      "emp_id": "JATS"
    },
    {
      "emp_name": "Arka Bhattacharya (ARKB)",
      "emp_id": "ARKB"
    },
    {
      "emp_name": "Sumit Nandal (SUNA)",
      "emp_id": "SUNA"
    },
    {
      "emp_name": "Yashi Varshney (YASV)",
      "emp_id": "YASV"
    },
    {
      "emp_name": "Rajat Trikha (XRAJT)",
      "emp_id": "XRAJT"
    },
    {
      "emp_name": "Jai Prakash Harijan (JAIH)",
      "emp_id": "JAIH"
    },
    {
      "emp_name": "Amit Kumar Srivastava (AMSR)",
      "emp_id": "AMSR"
    },
    {
      "emp_name": "Bhupendra Singh (BHUS)",
      "emp_id": "BHUS"
    },
    {
      "emp_name": "Gaurav Chaturvedi (GAUC)",
      "emp_id": "GAUC"
    },
    {
      "emp_name": "Stuti Vaish (STUV)",
      "emp_id": "STUV"
    },
    {
      "emp_name": "Ajay Kumar (AJAK)",
      "emp_id": "AJAK"
    },
    {
      "emp_name": "Hitesh Agarwal (HITH)",
      "emp_id": "HITH"
    },
    {
      "emp_name": "Pallavi Srivastava (PALS)",
      "emp_id": "PALS"
    },
    {
      "emp_name": "Saakshi Srivastava (SASR)",
      "emp_id": "SASR"
    },
    {
      "emp_name": "Saumitra Azad (SAUA)",
      "emp_id": "SAUA"
    },
    {
      "emp_name": "Gaurav Malhotra (GAUM)",
      "emp_id": "GAUM"
    },
    {
      "emp_name": "Tarun Taneja (TATA)",
      "emp_id": "TATA"
    },
    {
      "emp_name": "Arvinder Chaudhary (ARVC)",
      "emp_id": "ARVC"
    },
    {
      "emp_name": "Rakhi Aswal (RAKA)",
      "emp_id": "RAKA"
    },
    {
      "emp_name": "Garima Godara (GAGO)",
      "emp_id": "GAGO"
    },
    {
      "emp_name": "Shiroman Singh (SSIN)",
      "emp_id": "SSIN"
    },
    {
      "emp_name": "Hemraj Jain (HEMJ)",
      "emp_id": "HEMJ"
    },
    {
      "emp_name": "Shruti Mehra (SHRM)",
      "emp_id": "SHRM"
    },
    {
      "emp_name": "Shubham Jhamb (SHUJ)",
      "emp_id": "SHUJ"
    },
    {
      "emp_name": "Vipin Kumar Singh (VIPS)",
      "emp_id": "VIPS"
    },
    {
      "emp_name": "Uzma Khan (UZMK)",
      "emp_id": "UZMK"
    },
    {
      "emp_name": "Nitish Saxena (NISA)",
      "emp_id": "NISA"
    },
    {
      "emp_name": "Pooja Verma (POVE)",
      "emp_id": "POVE"
    },
    {
      "emp_name": "Vikas Wadhwa (VIKW)",
      "emp_id": "VIKW"
    },
    {
      "emp_name": "Sahil Wadhwa (SAHW)",
      "emp_id": "SAHW"
    },
    {
      "emp_name": "Virendra Singhal (VIRS)",
      "emp_id": "VIRS"
    },
    {
      "emp_name": "Vikas Kumar (VIKK)",
      "emp_id": "VIKK"
    },
    {
      "emp_name": "Vivek Kumar Srivastava (VIVS)",
      "emp_id": "VIVS"
    },
    {
      "emp_name": "Piyush Kumar Tripathi (PIYT)",
      "emp_id": "PIYT"
    },
    {
      "emp_name": "Ankur Srivastav (ANSR)",
      "emp_id": "ANSR"
    },
    {
      "emp_name": "Nitika Chugh (NITC)",
      "emp_id": "NITC"
    },
    {
      "emp_name": "Neeraj Kumar Arya (NEEA)",
      "emp_id": "NEEA"
    },
    {
      "emp_name": "Jai Prakash Kumar (JAIK)",
      "emp_id": "JAIK"
    },
    {
      "emp_name": "Neha Garg (NEGA)",
      "emp_id": "NEGA"
    },
    {
      "emp_name": "Prateek Bindal (PRBI)",
      "emp_id": "PRBI"
    },
    {
      "emp_name": "Onkar . (ONKO)",
      "emp_id": "ONKO"
    },
    {
      "emp_name": "Deepak Grover (DEGR)",
      "emp_id": "DEGR"
    },
    {
      "emp_name": "Jyoti Tyagi (XJYOT)",
      "emp_id": "XJYOT"
    },
    {
      "emp_name": "Brijesh Sehgal (BSEH)",
      "emp_id": "BSEH"
    },
    {
      "emp_name": "Silky Bhateja (XSILB)",
      "emp_id": "XSILB"
    },
    {
      "emp_name": "Yugandhar Yashwantrao Kamdi (YUGK)",
      "emp_id": "YUGK"
    },
    {
      "emp_name": "Vijay Kumar (VIKU)",
      "emp_id": "VIKU"
    },
    {
      "emp_name": "Hemant Parashar (HEMP)",
      "emp_id": "HEMP"
    },
    {
      "emp_name": "Deepti Rawat (DEER)",
      "emp_id": "DEER"
    },
    {
      "emp_name": "Himanshu Mehndiratta (HIM)",
      "emp_id": "HIM"
    },
    {
      "emp_name": "Ankit Maheshwari (ANKM)",
      "emp_id": "ANKM"
    },
    {
      "emp_name": "Pooja Verma (POOV)",
      "emp_id": "POOV"
    },
    {
      "emp_name": "Ankit Goyal (ANGO)",
      "emp_id": "ANGO"
    },
    {
      "emp_name": "Miti Acharya (MITI)",
      "emp_id": "MITI"
    },
    {
      "emp_name": "Siddharth Rawat (SIDR)",
      "emp_id": "SIDR"
    },
    {
      "emp_name": "Rajat Rana (RARA)",
      "emp_id": "RARA"
    },
    {
      "emp_name": "Parvesh Rana (PARR)",
      "emp_id": "PARR"
    },
    {
      "emp_name": "Nishi Kant Mittal (NISM)",
      "emp_id": "NISM"
    },
    {
      "emp_name": "Neha Gupta (NEHG)",
      "emp_id": "NEHG"
    },
    {
      "emp_name": "Mayur Jain (MAYJ)",
      "emp_id": "MAYJ"
    },
    {
      "emp_name": "Anurag Singh (ANSI)",
      "emp_id": "ANSI"
    },
    {
      "emp_name": "Arpan Mukherjee (ARPM)",
      "emp_id": "ARPM"
    },
    {
      "emp_name": "Deepak Bohra (DEEB)",
      "emp_id": "DEEB"
    },
    {
      "emp_name": "Rohit Gupta (ROGU)",
      "emp_id": "ROGU"
    },
    {
      "emp_name": "Nishant Khullar (NIKH)",
      "emp_id": "NIKH"
    },
    {
      "emp_name": "Subhash Singh (XSUBS)",
      "emp_id": "XSUBS"
    },
    {
      "emp_name": "Om Prakash (XOMPR)",
      "emp_id": "XOMPR"
    },
    {
      "emp_name": "Amit Chaurasia (AMCH)",
      "emp_id": "AMCH"
    },
    {
      "emp_name": "Rajneesh Kumar Gadge (RAJG)",
      "emp_id": "RAJG"
    },
    {
      "emp_name": "Aakash Dahiya (AAKD)",
      "emp_id": "AAKD"
    },
    {
      "emp_name": "Vandana Sharma (VANS)",
      "emp_id": "VANS"
    },
    {
      "emp_name": "Shobhit Nagpal (SHON)",
      "emp_id": "SHON"
    },
    {
      "emp_name": "Mayank Srivastava (MAYS)",
      "emp_id": "MAYS"
    },
    {
      "emp_name": "Vipin Goel (VIPG)",
      "emp_id": "VIPG"
    },
    {
      "emp_name": "Amit Chaudhary (AMIC)",
      "emp_id": "AMIC"
    },
    {
      "emp_name": "Vaibhav Katyal (VAIK)",
      "emp_id": "VAIK"
    },
    {
      "emp_name": "Kunal Sharma (KUNS)",
      "emp_id": "KUNS"
    },
    {
      "emp_name": "Dikshit Dhawan (DIKS)",
      "emp_id": "DIKS"
    },
    {
      "emp_name": "Ankit Agarwal (ANKA)",
      "emp_id": "ANKA"
    },
    {
      "emp_name": "Ashutosh Kumar Singh (ASSI)",
      "emp_id": "ASSI"
    },
    {
      "emp_name": "Ankit Sharma (ANKS)",
      "emp_id": "ANKS"
    },
    {
      "emp_name": "Richa Jindal (RICJ)",
      "emp_id": "RICJ"
    },
    {
      "emp_name": "Sumit Gupta (SGUP)",
      "emp_id": "SGUP"
    },
    {
      "emp_name": "Katyayan Khanna (KAKH)",
      "emp_id": "KAKH"
    },
    {
      "emp_name": "Shashank Srivastava (SHSR)",
      "emp_id": "SHSR"
    },
    {
      "emp_name": "Amit Prakash (AMIP)",
      "emp_id": "AMIP"
    },
    {
      "emp_name": "Chander Prakash (CHAP)",
      "emp_id": "CHAP"
    },
    {
      "emp_name": "Sumit Gupta (SUGU)",
      "emp_id": "SUGU"
    },
    {
      "emp_name": "Atul Kumar Singh (ATUS)",
      "emp_id": "ATUS"
    },
    {
      "emp_name": "Mathlesh Kumar (MKY)",
      "emp_id": "MKY"
    },
    {
      "emp_name": "Narender Singh Jhijaria (NSJ)",
      "emp_id": "NSJ"
    },
    {
      "emp_name": "Sameer Gupta (SAMG)",
      "emp_id": "SAMG"
    },
    {
      "emp_name": "Deepak Kumar (DKU)",
      "emp_id": "DKU"
    },
    {
      "emp_name": "Anubhav Asati (ANUA)",
      "emp_id": "ANUA"
    },
    {
      "emp_name": "Kumar Sonabh (KUMS)",
      "emp_id": "KUMS"
    },
    {
      "emp_name": "Suraj Kumar (SURK)",
      "emp_id": "SURK"
    },
    {
      "emp_name": "Samar Bharti (SAMB)",
      "emp_id": "SAMB"
    },
    {
      "emp_name": "Sumit Choudhary (SUCH)",
      "emp_id": "SUCH"
    },
    {
      "emp_name": "Ritesh Puri (RITP)",
      "emp_id": "RITP"
    },
    {
      "emp_name": "Ravinder Singh Chauhan (RAVC)",
      "emp_id": "RAVC"
    },
    {
      "emp_name": "Vivek Rajput (VIVR)",
      "emp_id": "VIVR"
    },
    {
      "emp_name": "Harshita Koul (XHARK)",
      "emp_id": "XHARK"
    },
    {
      "emp_name": "Anshuman Khanna (ANKH)",
      "emp_id": "ANKH"
    },
    {
      "emp_name": "Suruchi Badhwar (SURB)",
      "emp_id": "SURB"
    },
    {
      "emp_name": "Neelesh Wadhwani (NEEW)",
      "emp_id": "NEEW"
    },
    {
      "emp_name": "Mayur Kumar Varshney (MAYV)",
      "emp_id": "MAYV"
    },
    {
      "emp_name": "Varun Mittal (VAMI)",
      "emp_id": "VAMI"
    },
    {
      "emp_name": "Abhishek Kumar (XABHK)",
      "emp_id": "XABHK"
    },
    {
      "emp_name": "Nitesh Soni (NITS)",
      "emp_id": "NITS"
    },
    {
      "emp_name": "Tanya Dua (TAND)",
      "emp_id": "TAND"
    },
    {
      "emp_name": "Rohini Goutam (ROGO)",
      "emp_id": "ROGO"
    },
    {
      "emp_name": "Gaurav Sharma (GAUS)",
      "emp_id": "GAUS"
    },
    {
      "emp_name": "Gourab Ghosh (GOUG)",
      "emp_id": "GOUG"
    },
    {
      "emp_name": "Mukul Aggarwal (MUKA)",
      "emp_id": "MUKA"
    },
    {
      "emp_name": "Shobhit Sharma (SHOS)",
      "emp_id": "SHOS"
    },
    {
      "emp_name": "Varun Mangla (VAMA)",
      "emp_id": "VAMA"
    },
    {
      "emp_name": "Ruchi Gupta (RUCG)",
      "emp_id": "RUCG"
    },
    {
      "emp_name": "Ankita Dwivedi (ANKD)",
      "emp_id": "ANKD"
    },
    {
      "emp_name": "Jyotsna Aneja (JYOA)",
      "emp_id": "JYOA"
    },
    {
      "emp_name": "Anup Kumar (ANUK)",
      "emp_id": "ANUK"
    },
    {
      "emp_name": "Akshay K Bharti (AKSB)",
      "emp_id": "AKSB"
    },
    {
      "emp_name": "Santosh Chauhan (SCHA)",
      "emp_id": "SCHA"
    },
    {
      "emp_name": "Manish Tank (MTAN)",
      "emp_id": "MTAN"
    },
    {
      "emp_name": "Swati Tarika (SWAT)",
      "emp_id": "SWAT"
    },
    {
      "emp_name": "Swati Soni (SWAS)",
      "emp_id": "SWAS"
    },
    {
      "emp_name": "Shekhar Sharma (SHES)",
      "emp_id": "SHES"
    },
    {
      "emp_name": "Nitin Tokhi (NITT)",
      "emp_id": "NITT"
    },
    {
      "emp_name": "Satyajeet Sinha (SATS)",
      "emp_id": "SATS"
    },
    {
      "emp_name": "Aditya Arora (ADIA)",
      "emp_id": "ADIA"
    },
    {
      "emp_name": "Kunal Patil (KUNP)",
      "emp_id": "KUNP"
    },
    {
      "emp_name": "Anubhav Sharma (ANSH)",
      "emp_id": "ANSH"
    },
    {
      "emp_name": "Meenakshi Rekhi (MEER)",
      "emp_id": "MEER"
    },
    {
      "emp_name": "Himanshi Thakur (HIMT)",
      "emp_id": "HIMT"
    },
    {
      "emp_name": "Saurabh Naik (SAUN)",
      "emp_id": "SAUN"
    },
    {
      "emp_name": "Prakhar Agrawal (PRAA)",
      "emp_id": "PRAA"
    },
    {
      "emp_name": "Bibhuti Sarkar (BIBS)",
      "emp_id": "BIBS"
    },
    {
      "emp_name": "Mohit Chowdhary (MOHC)",
      "emp_id": "MOHC"
    },
    {
      "emp_name": "Priyanka Pilania (PRIP)",
      "emp_id": "PRIP"
    },
    {
      "emp_name": "Amit Kumar Singh (ASIN)",
      "emp_id": "ASIN"
    },
    {
      "emp_name": "Swapnil Vyom (SWVY)",
      "emp_id": "SWVY"
    },
    {
      "emp_name": "Sagar Nath Jha (SAGJ)",
      "emp_id": "SAGJ"
    },
    {
      "emp_name": "Ashish Rahute (ASHR)",
      "emp_id": "ASHR"
    },
    {
      "emp_name": "Kapil Sharma (KAPS)",
      "emp_id": "KAPS"
    },
    {
      "emp_name": "Saurabh Rana (SAUR)",
      "emp_id": "SAUR"
    },
    {
      "emp_name": "Servesh saxena (SERS)",
      "emp_id": "SERS"
    },
    {
      "emp_name": "Naveen Kumar Joshi (NAVJ)",
      "emp_id": "NAVJ"
    },
    {
      "emp_name": "Anandita Yadav (ANAY)",
      "emp_id": "ANAY"
    },
    {
      "emp_name": "Shraddha Dhingra (SHRD)",
      "emp_id": "SHRD"
    },
    {
      "emp_name": "Ravi Kant Agarwal (RAVA)",
      "emp_id": "RAVA"
    },
    {
      "emp_name": "Ashwani Saini (ASHS)",
      "emp_id": "ASHS"
    },
    {
      "emp_name": "Naveen Kumar Kridwal (NAVK)",
      "emp_id": "NAVK"
    },
    {
      "emp_name": "Amit Sharma (AMIS)",
      "emp_id": "AMIS"
    },
    {
      "emp_name": "Naresh Singh (NARS)",
      "emp_id": "NARS"
    },
    {
      "emp_name": "Amit Kumar (AMIK)",
      "emp_id": "AMIK"
    },
    {
      "emp_name": "Nipun Bajaj (NIPB)",
      "emp_id": "NIPB"
    },
    {
      "emp_name": "Varnika Jain (VARJ)",
      "emp_id": "VARJ"
    },
    {
      "emp_name": "Ankur Kumar Goel (ANKG)",
      "emp_id": "ANKG"
    },
    {
      "emp_name": "Rakesh Shah (RAKS)",
      "emp_id": "RAKS"
    },
    {
      "emp_name": "Manish Kumar Jain (MANJ)",
      "emp_id": "MANJ"
    },
    {
      "emp_name": "Mayank Bhatheja (MAYB)",
      "emp_id": "MAYB"
    },
    {
      "emp_name": "Karan Singh (KARS)",
      "emp_id": "KARS"
    },
    {
      "emp_name": "Nishant Kumar (NIKU)",
      "emp_id": "NIKU"
    },
    {
      "emp_name": "Chandranand Thakur (CHTH)",
      "emp_id": "CHTH"
    },
    {
      "emp_name": "Kavita (KAVK)",
      "emp_id": "KAVK"
    },
    {
      "emp_name": "Hemendra Sharma (HEMS)",
      "emp_id": "HEMS"
    },
    {
      "emp_name": "Nilutpal Borah (NILB)",
      "emp_id": "NILB"
    },
    {
      "emp_name": "Vikas Thareja (VITH)",
      "emp_id": "VITH"
    },
    {
      "emp_name": "Vikas Benjamin Tudu (VIKT)",
      "emp_id": "VIKT"
    },
    {
      "emp_name": "Purva Raheja (PURR)",
      "emp_id": "PURR"
    },
    {
      "emp_name": "Nayeema Shamim (NAYS)",
      "emp_id": "NAYS"
    },
    {
      "emp_name": "Karan Luthra (KARL)",
      "emp_id": "KARL"
    },
    {
      "emp_name": "Aman Arora (AMAA)",
      "emp_id": "AMAA"
    },
    {
      "emp_name": "Vinod . (VINV)",
      "emp_id": "VINV"
    },
    {
      "emp_name": "Vishal Kumar Singh (VISS)",
      "emp_id": "VISS"
    },
    {
      "emp_name": "Ritu Raj Gogoi (RITG)",
      "emp_id": "RITG"
    },
    {
      "emp_name": "Sachin Kumar Dubey (SACD)",
      "emp_id": "SACD"
    },
    {
      "emp_name": "Tulika Mehrotra (TULM)",
      "emp_id": "TULM"
    },
    {
      "emp_name": "Rohit Kumar Gupta (ROHG)",
      "emp_id": "ROHG"
    },
    {
      "emp_name": "Manish Khandelwal (MANK)",
      "emp_id": "MANK"
    },
    {
      "emp_name": "Rajat Narang (RAJN)",
      "emp_id": "RAJN"
    },
    {
      "emp_name": "Baram Deen Singh (BARS)",
      "emp_id": "BARS"
    },
    {
      "emp_name": "Madhumita Singha (XMADS)",
      "emp_id": "XMADS"
    },
    {
      "emp_name": "Abhay Sharma (ABHS)",
      "emp_id": "ABHS"
    },
    {
      "emp_name": "Dinesh Pathak (DINP)",
      "emp_id": "DINP"
    },
    {
      "emp_name": "Pooja Khandelwal (POOK)",
      "emp_id": "POOK"
    },
    {
      "emp_name": "Paras Arora (PARA)",
      "emp_id": "PARA"
    },
    {
      "emp_name": "Shweta Mittal (SHWM)",
      "emp_id": "SHWM"
    },
    {
      "emp_name": "Disha Bhandari (DISB)",
      "emp_id": "DISB"
    },
    {
      "emp_name": "Gaurav Arora (GAAR)",
      "emp_id": "GAAR"
    },
    {
      "emp_name": "Chetan Prakash (CHEP)",
      "emp_id": "CHEP"
    },
    {
      "emp_name": "Saurabh Srivastava (SAUS)",
      "emp_id": "SAUS"
    },
    {
      "emp_name": "Harish Chandra Joshi (HARJ)",
      "emp_id": "HARJ"
    },
    {
      "emp_name": "Gaurav Shyam Aggarwa (GAAG)",
      "emp_id": "GAAG"
    },
    {
      "emp_name": "Akshit Vij (AKSV)",
      "emp_id": "AKSV"
    },
    {
      "emp_name": "Nishant Kumar (NISK)",
      "emp_id": "NISK"
    },
    {
      "emp_name": "Lalit Kumar (LALK)",
      "emp_id": "LALK"
    },
    {
      "emp_name": "Kuljit Singh (KULS)",
      "emp_id": "KULS"
    },
    {
      "emp_name": "Kapil Wadhawan (KAPW)",
      "emp_id": "KAPW"
    },
    {
      "emp_name": "Sarvesh Kumar (SARK)",
      "emp_id": "SARK"
    },
    {
      "emp_name": "Vijendra Kumar (VIJK)",
      "emp_id": "VIJK"
    },
    {
      "emp_name": "Abhishek Mishra (ABHM)",
      "emp_id": "ABHM"
    },
    {
      "emp_name": "Santosh Kumar Chaubey (SACH)",
      "emp_id": "SACH"
    },
    {
      "emp_name": "Gaurav Agrawal (GAUA)",
      "emp_id": "GAUA"
    },
    {
      "emp_name": "Hitesh Kumar (HITK)",
      "emp_id": "HITK"
    },
    {
      "emp_name": "Abhay Kumar Akash (ABAK)",
      "emp_id": "ABAK"
    },
    {
      "emp_name": "Ridhima Singh (RID)",
      "emp_id": "RID"
    },
    {
      "emp_name": "Vineet Kotnala (VIN)",
      "emp_id": "VIN"
    },
    {
      "emp_name": "Shashwat Gunjan (GUN)",
      "emp_id": "GUN"
    },
    {
      "emp_name": "Jaikrishan Agrawal (JAAG)",
      "emp_id": "JAAG"
    },
    {
      "emp_name": "Chirag Bhasin (CBH)",
      "emp_id": "CBH"
    },
    {
      "emp_name": "Vikas Kumar (VAKR)",
      "emp_id": "VAKR"
    },
    {
      "emp_name": "Vaibhav Sharma (VAS)",
      "emp_id": "VAS"
    },
    {
      "emp_name": "Gaurav Sharma (GRSA)",
      "emp_id": "GRSA"
    },
    {
      "emp_name": "Rahul Bhargava (RAB)",
      "emp_id": "RAB"
    },
    {
      "emp_name": "Gaurav Bahl (GAB)",
      "emp_id": "GAB"
    },
    {
      "emp_name": "Vibhore Kalsi (VIB)",
      "emp_id": "VIB"
    },
    {
      "emp_name": "Abhinav Kumar (AHKR)",
      "emp_id": "AHKR"
    },
    {
      "emp_name": "Vipin Kumar Goyal (VIP)",
      "emp_id": "VIP"
    },
    {
      "emp_name": "Sudesh Kumar (SUD)",
      "emp_id": "SUD"
    },
    {
      "emp_name": "Manish Mishra (MHMI)",
      "emp_id": "MHMI"
    },
    {
      "emp_name": "Ankit Goyal (GOY)",
      "emp_id": "GOY"
    },
    {
      "emp_name": "Sushil Nischal (SUN)",
      "emp_id": "SUN"
    },
    {
      "emp_name": "Priyank Jain (JAI)",
      "emp_id": "JAI"
    },
    {
      "emp_name": "Sushant Kumar Pal (SUPL)",
      "emp_id": "SUPL"
    },
    {
      "emp_name": "Pooja Sharma (POS)",
      "emp_id": "POS"
    },
    {
      "emp_name": "Ajay Bhalla (AJB)",
      "emp_id": "AJB"
    },
    {
      "emp_name": "Arbind Chandra (ANCD)",
      "emp_id": "ANCD"
    },
    {
      "emp_name": "Saurabh Srivastava (SBSR)",
      "emp_id": "SBSR"
    },
    {
      "emp_name": "Keshav Bansal (CEP)",
      "emp_id": "CEP"
    },
    {
      "emp_name": "Manoj Kumar Yadav (MYA)",
      "emp_id": "MYA"
    },
    {
      "emp_name": "Akash Parashar (OAA)",
      "emp_id": "OAA"
    },
    {
      "emp_name": "Jasmeet Singh (JMGH)",
      "emp_id": "JMGH"
    },
    {
      "emp_name": "Suhail Sharma (SHAS)",
      "emp_id": "SHAS"
    },
    {
      "emp_name": "Aditi Saini (YCV)",
      "emp_id": "YCV"
    },
    {
      "emp_name": "Ankush Gupta (GUP)",
      "emp_id": "GUP"
    },
    {
      "emp_name": "Nikhil Mandot (NIMA)",
      "emp_id": "NIMA"
    },
    {
      "emp_name": "Ramit Madan (RMMA)",
      "emp_id": "RMMA"
    },
    {
      "emp_name": "Pankaj Sethi (PASI)",
      "emp_id": "PASI"
    },
    {
      "emp_name": "Nikhil Negi (NIN)",
      "emp_id": "NIN"
    },
    {
      "emp_name": "Madhur Sharma (MAHS)",
      "emp_id": "MAHS"
    },
    {
      "emp_name": "Riddhi Sharma (RIS)",
      "emp_id": "RIS"
    },
    {
      "emp_name": "Rajnish Agarwal (JOI)",
      "emp_id": "JOI"
    },
    {
      "emp_name": "Suraj Gupta (SUR)",
      "emp_id": "SUR"
    },
    {
      "emp_name": "Priyanka Kundu (KUN)",
      "emp_id": "KUN"
    },
    {
      "emp_name": "Puran Singh (XPSD)",
      "emp_id": "XPSD"
    },
    {
      "emp_name": "Ishwar Singh (XISS)",
      "emp_id": "XISS"
    },
    {
      "emp_name": "Lokesh Balan (LBN)",
      "emp_id": "LBN"
    },
    {
      "emp_name": "Shalini Kakkar (SLK)",
      "emp_id": "SLK"
    },
    {
      "emp_name": "Nitin Saxena (NTS)",
      "emp_id": "NTS"
    },
    {
      "emp_name": "Kartikay Ahuja (KAE)",
      "emp_id": "KAE"
    },
    {
      "emp_name": "Puneet Sharma (PSN)",
      "emp_id": "PSN"
    },
    {
      "emp_name": "Rajesh Kaushal (RKL)",
      "emp_id": "RKL"
    },
    {
      "emp_name": "Kanishak Bhatia (KBB)",
      "emp_id": "KBB"
    },
    {
      "emp_name": "Ashutosh Kumar Singh (AUI)",
      "emp_id": "AUI"
    },
    {
      "emp_name": "Gautam Choudhary (GCY)",
      "emp_id": "GCY"
    },
    {
      "emp_name": "Saumya Tripathi (STI)",
      "emp_id": "STI"
    },
    {
      "emp_name": "Rishabh Mittal (RMI)",
      "emp_id": "RMI"
    },
    {
      "emp_name": "Nandini Tandon (NTN)",
      "emp_id": "NTN"
    },
    {
      "emp_name": "Bharat Kumar (BHK)",
      "emp_id": "BHK"
    },
    {
      "emp_name": "Manoj Aggarwal FO (MOF)",
      "emp_id": "MOF"
    },
    {
      "emp_name": "Vikram Singh Rajpoot (VR)",
      "emp_id": "VR"
    },
    {
      "emp_name": "Anjali Verma (AVE)",
      "emp_id": "AVE"
    },
    {
      "emp_name": "Nikhil Aggarwal (NAL)",
      "emp_id": "NAL"
    },
    {
      "emp_name": "Puneet Sharma (PSM)",
      "emp_id": "PSM"
    },
    {
      "emp_name": "Mukul Bhandari (MBY)",
      "emp_id": "MBY"
    },
    {
      "emp_name": "Mayur Rathi (MYR)",
      "emp_id": "MYR"
    },
    {
      "emp_name": "Prashant Pokhariyal (PPL)",
      "emp_id": "PPL"
    },
    {
      "emp_name": "Hira Lal (HLL)",
      "emp_id": "HLL"
    },
    {
      "emp_name": "Ravi K Singh (RVS)",
      "emp_id": "RVS"
    },
    {
      "emp_name": "Antaryami Basuri (ATB)",
      "emp_id": "ATB"
    },
    {
      "emp_name": "Sachin Singh (SSM)",
      "emp_id": "SSM"
    },
    {
      "emp_name": "Deepak Sharma (DES)",
      "emp_id": "DES"
    },
    {
      "emp_name": "Prerna Sood (PSG)",
      "emp_id": "PSG"
    },
    {
      "emp_name": "Pawan Tiwari (PAT)",
      "emp_id": "PAT"
    },
    {
      "emp_name": "Ranjan Mathur (RNM)",
      "emp_id": "RNM"
    },
    {
      "emp_name": "Apurva Tripathi (APT)",
      "emp_id": "APT"
    },
    {
      "emp_name": "Amit Kumar (AKQ)",
      "emp_id": "AKQ"
    },
    {
      "emp_name": "Om Prakash Rathor (OPR)",
      "emp_id": "OPR"
    },
    {
      "emp_name": "Hindveer Singh (HSI)",
      "emp_id": "HSI"
    },
    {
      "emp_name": "Vipendra Singh Yadav (VY)",
      "emp_id": "VY"
    },
    {
      "emp_name": "Gurpratap Singh (GSI)",
      "emp_id": "GSI"
    },
    {
      "emp_name": "Atul Upadhyay (AU)",
      "emp_id": "AU"
    },
    {
      "emp_name": "Kapil Kumar (KKU)",
      "emp_id": "KKU"
    },
    {
      "emp_name": "Raghav Sabherwal (RSA)",
      "emp_id": "RSA"
    },
    {
      "emp_name": "Vijay Kumar BO (VKU)",
      "emp_id": "VKU"
    },
    {
      "emp_name": "Chaitanya Kumar Yadagini (CKY)",
      "emp_id": "CKY"
    },
    {
      "emp_name": "Mohit Soam (MOKS)",
      "emp_id": "MOKS"
    },
    {
      "emp_name": "Manohar Lal (MLAL)",
      "emp_id": "MLAL"
    },
    {
      "emp_name": "Vishesh Singhal (VSL)",
      "emp_id": "VSL"
    },
    {
      "emp_name": "Yadwinder Singh (YAS)",
      "emp_id": "YAS"
    },
    {
      "emp_name": "Vishwa Deepak (VDE)",
      "emp_id": "VDE"
    },
    {
      "emp_name": "Victor Gnanaraj (VGN)",
      "emp_id": "VGN"
    },
    {
      "emp_name": "Vikas Kumar Khichar (VKK)",
      "emp_id": "VKK"
    },
    {
      "emp_name": "Varun Magon (VAM)",
      "emp_id": "VAM"
    },
    {
      "emp_name": "Vineet Garg (VGG)",
      "emp_id": "VGG"
    },
    {
      "emp_name": "Vijay Kumar (VJK)",
      "emp_id": "VJK"
    },
    {
      "emp_name": "Swati Sangal (SWS)",
      "emp_id": "SWS"
    },
    {
      "emp_name": "Tushar Mathur (TSM)",
      "emp_id": "TSM"
    },
    {
      "emp_name": "Shrikant Sharma (SRS)",
      "emp_id": "SRS"
    },
    {
      "emp_name": "Shailender Kumar (SIK)",
      "emp_id": "SIK"
    },
    {
      "emp_name": "Sunita Batra (SUB)",
      "emp_id": "SUB"
    },
    {
      "emp_name": "Santosh Kumar Pankaj (SKP)",
      "emp_id": "SKP"
    },
    {
      "emp_name": "Saumitra Chaturvedi (SCH)",
      "emp_id": "SCH"
    },
    {
      "emp_name": "Satya Swarup Dash (SAD)",
      "emp_id": "SAD"
    },
    {
      "emp_name": "Sanjeet Kumar (SKB)",
      "emp_id": "SKB"
    },
    {
      "emp_name": "Saurabh Chanana (SAC)",
      "emp_id": "SAC"
    },
    {
      "emp_name": "Sandeep Gandheer (SDG)",
      "emp_id": "SDG"
    },
    {
      "emp_name": "Ravi Kochar (RVK)",
      "emp_id": "RVK"
    },
    {
      "emp_name": "Renu Ruhil (RRU)",
      "emp_id": "RRU"
    },
    {
      "emp_name": "Ruby Khare (RUK)",
      "emp_id": "RUK"
    },
    {
      "emp_name": "Rahul Jain (RJN)",
      "emp_id": "RJN"
    },
    {
      "emp_name": "Raghu Nandan Bhardwaj (RBH)",
      "emp_id": "RBH"
    },
    {
      "emp_name": "Rajiv Gupta (RGU)",
      "emp_id": "RGU"
    },
    {
      "emp_name": "Raj Kamal Singh (RKS)",
      "emp_id": "RKS"
    },
    {
      "emp_name": "Raghav Sirohi (RGS)",
      "emp_id": "RGS"
    },
    {
      "emp_name": "Rajesh Kalra (RHK)",
      "emp_id": "RHK"
    },
    {
      "emp_name": "Punarjot Shah Singh (PSS)",
      "emp_id": "PSS"
    },
    {
      "emp_name": "Prashant Kumar Jha (PKJ)",
      "emp_id": "PKJ"
    },
    {
      "emp_name": "Puneet Kumar Sharma (PUS)",
      "emp_id": "PUS"
    },
    {
      "emp_name": "Prateek Mangla (PTM)",
      "emp_id": "PTM"
    },
    {
      "emp_name": "Prakhar Jain (PJN)",
      "emp_id": "PJN"
    },
    {
      "emp_name": "Nidhi Sharma (NDS)",
      "emp_id": "NDS"
    },
    {
      "emp_name": "Nitin Arora (NAE)",
      "emp_id": "NAE"
    },
    {
      "emp_name": "Neha Jaiswal (NJ)",
      "emp_id": "NJ"
    },
    {
      "emp_name": "Naveen Verma (NV)",
      "emp_id": "NV"
    },
    {
      "emp_name": "Mona Thakur (MOR)",
      "emp_id": "MOR"
    },
    {
      "emp_name": "Rajeev Verma (RAV)",
      "emp_id": "RAV"
    },
    {
      "emp_name": "Mitesh Kumar Verma (MVE)",
      "emp_id": "MVE"
    },
    {
      "emp_name": "Mohit Gupta (MOG)",
      "emp_id": "MOG"
    },
    {
      "emp_name": "Mayank Katiyar (MYK)",
      "emp_id": "MYK"
    },
    {
      "emp_name": "Manish Kumar Shashi (MASI)",
      "emp_id": "MASI"
    },
    {
      "emp_name": "Meenakshi Sharma (MESH)",
      "emp_id": "MESH"
    },
    {
      "emp_name": "Lalit Vij (LAV)",
      "emp_id": "LAV"
    },
    {
      "emp_name": "Manish Kumar Rakheja (MRF)",
      "emp_id": "MRF"
    },
    {
      "emp_name": "Kunal Gupta (KGU)",
      "emp_id": "KGU"
    },
    {
      "emp_name": "Karan Singh (KSD)",
      "emp_id": "KSD"
    },
    {
      "emp_name": "Jitender Balhara (JIB)",
      "emp_id": "JIB"
    },
    {
      "emp_name": "Jatin Kalia (JNK)",
      "emp_id": "JNK"
    },
    {
      "emp_name": "Jaspreet Singh Virk (JSV)",
      "emp_id": "JSV"
    },
    {
      "emp_name": "Iltafur Rahman (IRA)",
      "emp_id": "IRA"
    },
    {
      "emp_name": "Hemant Singh Rawat (HSR)",
      "emp_id": "HSR"
    },
    {
      "emp_name": "Hari Bala Kishore (HBK)",
      "emp_id": "HBK"
    },
    {
      "emp_name": "Gopal Das Gupta (GDG)",
      "emp_id": "GDG"
    },
    {
      "emp_name": "Hardik Sharma (HSH)",
      "emp_id": "HSH"
    },
    {
      "emp_name": "Girish Patel (GPL)",
      "emp_id": "GPL"
    },
    {
      "emp_name": "Darshanjit Singh (DSI)",
      "emp_id": "DSI"
    },
    {
      "emp_name": "Deepak Mohindroo (DPM)",
      "emp_id": "DPM"
    },
    {
      "emp_name": "Biranchi Kumar Singh (BKS)",
      "emp_id": "BKS"
    },
    {
      "emp_name": "Deepak Gupta (DEA)",
      "emp_id": "DEA"
    },
    {
      "emp_name": "Avin Kumar (AVK)",
      "emp_id": "AVK"
    },
    {
      "emp_name": "Asha Assudani (AAX)",
      "emp_id": "AAX"
    },
    {
      "emp_name": "Ashwani Kumar Singh (AKS)",
      "emp_id": "AKS"
    },
    {
      "emp_name": "Ashutosh Gupta (AUG)",
      "emp_id": "AUG"
    },
    {
      "emp_name": "Sapanpreet Singh (SPS)",
      "emp_id": "SPS"
    },
    {
      "emp_name": "Ashish Jain (AHJ)",
      "emp_id": "AHJ"
    },
    {
      "emp_name": "Aparna Dube (APD)",
      "emp_id": "APD"
    },
    {
      "emp_name": "Anuraj Singh (AUS)",
      "emp_id": "AUS"
    },
    {
      "emp_name": "Arjun Varma (AUV)",
      "emp_id": "AUV"
    },
    {
      "emp_name": "Anand Keshri (AKB)",
      "emp_id": "AKB"
    },
    {
      "emp_name": "Ankur Mahajan (AUM)",
      "emp_id": "AUM"
    },
    {
      "emp_name": "Anshu Ashish (AAJ)",
      "emp_id": "AAJ"
    },
    {
      "emp_name": "Anish Sharma (ASX)",
      "emp_id": "ASX"
    },
    {
      "emp_name": "Amit Arora (AAI)",
      "emp_id": "AAI"
    },
    {
      "emp_name": "Alpana Gupta (AGU)",
      "emp_id": "AGU"
    },
    {
      "emp_name": "Aman Sethi (ASQ)",
      "emp_id": "ASQ"
    },
    {
      "emp_name": "Akshay Sharma (AYA)",
      "emp_id": "AYA"
    },
    {
      "emp_name": "Abhishek Aggarwal (ABL)",
      "emp_id": "ABL"
    },
    {
      "emp_name": "Abdul Quadir (AQR)",
      "emp_id": "AQR"
    },
    {
      "emp_name": "Aanchal Grover (AAG)",
      "emp_id": "AAG"
    }
   ]

  let floor_ar = [];
  for(let i = 0; i < 2; i++) {
    let bay_ar = []; 
    for(let j = 0; j < 16; j++) {
      if(j < 9) {
        bay_ar[j] = "F"+parseInt(i+5)+"-B0"+parseInt(j+1);
      } else {
        bay_ar[j] = "F"+parseInt(i+5)+"-B"+parseInt(j+1);
      }
    }
    floor_ar.push({
        floor_id: "F"+parseInt(i+5),
        bay_ar: bay_ar
    })
  }

  let bay_ar = [];
  for(let i = 0; i < 2; i++) {
    for(let j = 0; j < 16; j++) {
      bay_ar.push({
        bay_id: floor_ar[i].bay_ar[j],
        seat_ar: seat_ar = []
      })
    }
  }

  for(let i = 1; i <= 9; i++) {
    bay_ar[0].seat_ar.push(bay_ar[0].bay_id.substr(1,1)+".00"+i);
  }
  for(let i = 10; i <= 23; i++) {
    bay_ar[1].seat_ar.push(bay_ar[1].bay_id.substr(1,1)+".0"+i);
  }
  for(let i = 24; i <= 49; i++) {
    bay_ar[2].seat_ar.push(bay_ar[2].bay_id.substr(1,1)+".0"+i);
  }
  for(let i = 50; i <= 76; i++) {
    bay_ar[3].seat_ar.push(bay_ar[3].bay_id.substr(1,1)+".0"+i);
  }
  for(let i = 78; i <= 89; i++) {
    bay_ar[3].seat_ar.push(bay_ar[3].bay_id.substr(1,1)+".0"+i);
  }

  let seat_ar = [];

  for(let j = 0; j < 4; j++) {
    for(let k = 0; k < bay_ar[j].seat_ar.length; k++) {
      seat_ar.push({
        seat_id: bay_ar[j].seat_ar[k],
        emp_id: "null",
        assign_date: "null"
      })
    }
  }

  console.log(emp_ar)
  console.log(floor_ar);
  console.log(bay_ar);
  console.log(seat_ar)

  save_plan("floor_ar", floor_ar);  
  save_plan("bay_ar", bay_ar);
  save_plan("seat_ar", seat_ar);
  save_plan("emp_ar", emp_ar);
  console.log("Data saved in Local Storage");
}



document.addEventListener('DOMContentLoaded', () => {
    const nadzomData = {
        // ... (data nadzom Anda tetap sama) ...
        "1-100": {
            "Mukadimah": [
                {
                    nadzom: "قَالَ مُحَمَّدٌ هُوَ ابْنُ مَالِكِ ۞ أَحْمَدُ رَبِّي اللَّهَ خَيْرَ مَالِكِ",
                    penjelasan: "Muhammad, yaitu Ibnu Malik, berkata.\nAku memuji Tuhanku, Allah, sebaik-baik Raja."
                },
                {
                    nadzom: "مُصَلِّيًا عَلَى النَّبِيِّ الْمُصْطَفَى ۞ وآلِهِ المُسْتكْمِلِينَ الشَّرَفَا",
                    penjelasan: "Sambil bershalawat kepada Nabi yang terpilih.\nDan keluarganya yang mulia, terhormat, dan agung."
                },
                {
                    nadzom: "وَأَسْتَعِينُ اللَّهَ فِي أَلْفِيَّهْ ۞ مَقَاصِدُ النَّحْوِ بِهَا مَحْوِيَّهْ",
                    penjelasan: "Dan aku memohon pertolongan Allah dalam (menyusun) Alfiyah ini.\nYang dengannya tujuan-tujuan ilmu nahwu terangkum."
                },
                {
                    nadzom: "تُقَرِّبُ الْأَقْصَى بِلَفْظٍ مُوجَزِ ۞ وَتَبْسُطُ الْبَذْلَ بِوَعْدٍ مُنْجَزِ",
                    penjelasan: "Ia mendekatkan yang jauh dengan lafadz yang ringkas.\nDan ia membentangkan pemberian (ilmu) dengan janji yang terpenuhi."
                },
                {
                    nadzom: "وَتَقْتَضِي رِضًا بِغَيْرِ سُخْطِ ۞ فَائِقَةً أَلْفِيَّةَ ابْنِ مُعْطِي",
                    penjelasan: "Dan ia menuntut keridhaan tanpa kemarahan.\nMelebihi Alfiyah Ibnu Mu'thi."
                },
                {
                    nadzom: "وَهْوَ بِسَبْقٍ حَائِزٌ تَفْضِيلَا ۞ مُسْتَوْجِبٌ ثَنَائِيَ الْجَمِيلَا",
                    penjelasan: "Dan dia (Ibnu Mu'thi) dengan keunggulannya telah meraih keutamaan.\nBerhak mendapatkan pujianku yang indah."
                },
                {
                    nadzom: "وَاللَّهُ يَقْضِي بِهِبَاتٍ وَافِرَهْ ۞ لِي وَلَهُ فِي دَرَجَاتِ الْآخِرَهْ",
                    penjelasan: "Dan Allah memutuskan dengan karunia yang melimpah.\nBagiku dan baginya di derajat-derajat akhirat."
                },
            ],
            "Bab Kalam dan Jenisnya": [
                {
                    nadzom: "كَلاَمُنَا لَفْظٌ مُفِيدٌ كَاسْتَقِمْ ۞ وَاسْمٌ وَفِعْلٌ ثُمَّ حَرْفٌ الْكَلِمْ",
                    penjelasan: "Kalimat menurut nahwu adalah lafadz yang memberi faedah sempurna, seperti ucapan \"berdirilah\".\nIsim, fi'il, kemudian huruf adalah kalim (kata-kata)."
                },
                {
                    nadzom: "وَاحِدُهُ كَلِمَةٌ وَالْقَوْلُ عَمْ ۞ وَكِلْمَةٌ بِهَا كَلاَمٌ قَدْ يُؤَمْ",
                    penjelasan: "Satuannya adalah kalimah, sedangkan \"qoul\" lebih umum dari kalimah.\nKalimah adalah qoul yang mufrad (tunggal), seperti kata \"جِئْ\" (datanglah)."
                },
                {
                    nadzom: "بِالْجَرِّ وَالتَّنْوِينِ وَالنِّدَاوَأَلْ ۞ وَمُسْنَدٍ لِلاِسْمِ تَمْيِيزٌ حَصَلْ",
                    penjelasan: "Dan dengan jar, tanwin, dan nida'.\nSerta alif lam dan musnad (disandarkan) kepada isim, maka telah jelas perbedaannya."
                },
                {
                    nadzom: "بِتَا فَعَلْتَ وَأَتَتْ وَيَا افْعَلِي ۞ وَنُونِ أَقْبِلَنَّ فِعْلٌ يَنْجَلِي",
                    penjelasan: "Dengan ta' fa'alta (ta' fa'il), dan atat (ta' ta'nits), dan ya' if'ali (ya' mukhatabah).\nDan nun taukid pada fi'il, maka fi'il menjadi jelas."
                },
                {
                    nadzom: "سِوَاهُمَا الْحَرْفُ كَهَلْ وَفِي وَلَمْ ۞ فِعْلٌ مُضَارِعٌ يَلِي لَمْ كَيَشَمْ",
                    penjelasan: "Selain keduanya (isim dan fi'il) adalah huruf, seperti \"hal\", \"fi\", dan \"lam\".\nFi'il mudhari' mengikuti \"lam\", seperti \"yasyam\"."
                },
                {
                    nadzom: "وَمَاضِيَ الْأَفْعَالِ بِالتَّا مِزْ وَسِمْ ۞ بِالنُّونِ فِعْلَ الْأَمْرِ إِنْ أَمْرٌ فُهِمْ",
                    penjelasan: "Dan fi'il madhi, bedakanlah dengan ta' (ta' fa'il atau ta' ta'nits).\nDengan nun (taukid), fi'il amr jika perintah dipahami."
                },
                {
                    nadzom: "وَالْأَمْرُ إِنْ لَمْ يَكُ لِلنُّونِ مَحَلْ ۞ فِيهِ هُوَ اسْمٌ نَحْوُ صَهْ وَحَيَّهَلْ",
                    penjelasan: "Dan fi'il amr, jika tidak ada tempat untuk nun (taukid).\nDi dalamnya, ia adalah isim fi'il, dan itu di mana pun ia berada."
                },
            ],
            "Bab Mu'rab dan Mabni": [
                {
                    nadzom: "وَالْمُعْرَبُ الْأَسْمَاءُ حَيْثُ لَمْ تُشَبْ ۞ بِمُضْمَرٍ وَشِبْهِهِ مِنَ الْحُرُوفِ",
                    penjelasan: "Isim yang mu'rab adalah isim yang tidak menyerupai.\nDhomir dan yang menyerupainya dari huruf-huruf."
                },
                {
                    nadzom: "وَكُلُّ حَرْفٍ مُسْتَحِقٌّ لِلْبِنَا ۞ وَالْأَصْلُ فِي الْمَبْنِيِّ أَنْ يُسَكَّنَا",
                    penjelasan: "Dan setiap huruf berhak untuk mabni.\nDan asal dalam yang mabni adalah disukunkan."
                },
                {
                    nadzom: "وَمِنْهُ ذُو فَتْحٍ وَذُو كَسْرٍ وَضَمْ ۞ كَأَيْنَ أَمْسِ حَيْثُ وَالسَّاكِنُ كَمْ",
                    penjelasan: "Dan di antaranya ada yang berfathah, berkasrah, dan berdhammah.\nSeperti \"aina\", \"amsi\", \"haitsu\", dan yang sukun adalah \"kam\"."
                },
                {
                    nadzom: "وَالرَّفْعَ وَالنَّصْبَ اجْعَلَنْ إِعْرَابَا ۞ لِاسْمٍ وَفِعْلٍ نَحْوُ لَنْ أَهَابَا",
                    penjelasan: "Dan jadikanlah rafa' dan nashab sebagai i'rab.\nUntuk isim dan fi'il, seperti \"lan ahaba\" (aku tidak akan takut)."
                },
                {
                    nadzom: "وَالْجَرَّ لِلْأَسْمَاءِ وَالْجَزْمَ لِلْفِعَلْ ۞ وَمَيِّزَنْ مُعْرَبَ الْفِعْلِ بِـ لَمْ يَنَلْ",
                    penjelasan: "Dan jar untuk isim, dan jazm untuk fi'il.\nDan bedakanlah fi'il yang mu'rab dengan \"lam yanal\" (dia tidak akan mendapatkan)."
                },
                {
                    nadzom: "وَكُلُّ حَرْفٍ جَاءَ لِمَعْنًى ۞ فَهُوَ مَبْنِيٌّ لَا يُعْرَبُ",
                    penjelasan: "Dan setiap huruf yang datang untuk suatu makna.\nMaka ia adalah mabni, tidak di-i'rab."
                },
                {
                    nadzom: "وَالْإِعْرَابُ وَالْبِنَاءُ لِلْكَلِمِ ۞ كَالْفِعْلِ وَالْحَرْفِ وَالِاسْمِ الْمُعْرَبِ",
                    penjelasan: "Dan i'rab serta bina' adalah untuk kalimah.\nSeperti fi'il, huruf, dan isim yang mu'rab."
                },
                {
                    nadzom: "وَالْإِعْرَابُ تَغْيِيرُ آخِرِ الْكَلِمِ ۞ لِاخْتِلَافِ الْعَوَامِلِ دُخُولًا عَلَيْهِ",
                    penjelasan: "Dan i'rab adalah perubahan akhir kalimah.\nKarena perbedaan amil-amil yang masuk padanya."
                },
                {
                    nadzom: "وَالْبِنَاءُ لُزُومُ حَالَةٍ وَاحِدَةٍ ۞ لِغَيْرِ عِلَّةٍ أَوْ لِعِلَّةٍ",
                    penjelasan: "Dan bina' adalah tetapnya satu keadaan.\nTanpa sebab atau karena suatu sebab."
                },
                {
                    nadzom: "وَالْأَسْمَاءُ كُلُّهَا مُعْرَبَةٌ إِلَّا ۞ مَا شَابَهَ الْحَرْفَ فِي الْجُمُودِ",
                    penjelasan: "Dan semua isim adalah mu'rab, kecuali...\nApa yang menyerupai huruf dalam kemabniannya (tidak berubah)."
                },
                {
                    nadzom: "كَالضَّمَائِرِ وَأَسْمَاءِ الْإِشَارَةِ ۞ وَالْأَسْمَاءِ الْمَوْصُولَةِ وَأَسْمَاءِ الْأَفْعَالِ",
                    penjelasan: "Seperti dhomir-dhomir dan isim-isim isyarah.\nDan isim-isim maushul, dan isim-isim fi'il."
                },
                {
                    nadzom: "وَالْأَسْمَاءُ الْمُبْهَمَةُ وَالْأَسْمَاءُ الْمُضَافَةُ ۞ وَالْأَسْمَاءُ الْمُشْتَقَّةُ وَالْأَسْمَاءُ الْمُصَغَّرَةُ",
                    penjelasan: "Dan isim-isim mubham (yang tidak jelas) dan isim-isim mudhaf (yang disandarkan).\nDan isim-isim musytaq (yang diturunkan) dan isim-isim mushagghar (yang dikecilkan)."
                },
                {
                    nadzom: "وَالْأَسْمَاءُ الْمَنْسُوبَةُ وَالْأَسْمَاءُ الْمُكَبَّرَةُ ۞ وَالْأَسْمَاءُ الْمُفْرَدَةُ وَالْأَسْمَاءُ الْمُثَنَّاةُ",
                    penjelasan: "Dan isim-isim mansub (yang dinisbatkan) dan isim-isim mukabbar (yang dibesarkan).\nDan isim-isim mufrad (tunggal) dan isim-isim mutsanna (dua)."
                },
                {
                    nadzom: "وَالْأَسْمَاءُ الْمَجْمُوعَةُ وَالْأَسْمَاءُ الْمُؤَنَّثَةُ ۞ وَالْأَسْمَاءُ الْمُذَكَّرَةُ وَالْأَسْمَاءُ الْمُعَرَّفَةُ",
                    penjelasan: "Dan isim-isim majmu' (jamak) dan isim-isim mu'annats (perempuan).\nDan isim-isim mudzakkar (laki-laki) dan isim-isim mu'arraf (yang dima'rifatkan)."
                },
                {
                    nadzom: "وَالْأَسْمَاءُ الْمُنَكَّرَةُ وَالْأَسْمَاءُ الْمُبْهَمَةُ ۞ وَالْأَسْمَاءُ الْمُضَافَةُ وَالْأَسْمَاءُ الْمُشْتَقَّةُ",
                    penjelasan: "Dan isim-isim munakkar (yang dinakirahkan) dan isim-isim mubham (yang tidak jelas).\nDan isim-isim mudhaf (yang disandarkan) dan isim-isim musytaq (yang diturunkan)."
                },
                {
                    nadzom: "وَالْأَسْمَاءُ الْمُصَغَّرَةُ وَالْأَسْمَاءُ الْمَنْسُوبَةُ ۞ وَالْأَسْمَاءُ الْمُكَبَّرَةُ وَالْأَسْمَاءُ الْمُفْرَدَةُ",
                    penjelasan: "Dan isim-isim mushagghar (yang dikecilkan) dan isim-isim mansub (yang dinisbatkan).\nDan isim-isim mukabbar (yang dibesarkan) dan isim-isim mufrad (tunggal)."
                },
                {
                    nadzom: "وَالْأَسْمَاءُ الْمُثَنَّاةُ وَالْأَسْمَاءُ الْمَجْمُوعَةُ ۞ وَالْأَسْمَاءُ الْمُؤَنَّثَةُ وَالْأَسْمَاءُ الْمُذَكَّرَةُ",
                    penjelasan: "Dan isim-isim mutsanna (dua) dan isim-isim majmu' (jamak).\nDan isim-isim mu'annats (perempuan) dan isim-isim mudzakkar (laki-laki)."
                },
                {
                    nadzom: "وَالْأَسْمَاءُ الْمُعَرَّفَةُ وَالْأَسْمَاءُ الْمُنَكَّرَةُ ۞ وَالْأَسْمَاءُ الْمُبْهَمَةُ وَالْأَسْمَاءُ الْمُضَافَةُ",
                    penjelasan: "Dan isim-isim mu'arraf (yang dima'rifatkan) dan isim-isim munakkar (yang dinakirahkan).\nDan isim-isim mubham (yang tidak jelas) dan isim-isim mudhaf (yang disandarkan)."
                },
                {
                    nadzom: "وَالْأَسْمَاءُ الْمُشْتَقَّةُ وَالْأَسْمَاءُ الْمُصَغَّرَةُ ۞ وَالْأَسْمَاءُ الْمَنْسُوبَةُ وَالْأَسْمَاءُ الْمُكَبَّرَةُ",
                    penjelasan: "Dan isim-isim musytaq (yang diturunkan) dan isim-isim mushagghar (yang dikecilkan).\nDan isim-isim mansub (yang dinisbatkan) dan isim-isim mukabbar (yang dibesarkan)."
                },
                {
                    nadzom: "وَالْأَسْمَاءُ الْمُفْرَدَةُ وَالْأَسْمَاءُ الْمُثَنَّاةُ ۞ وَالْأَسْمَاءُ الْمَجْمُوعَةُ وَالْأَسْمَاءُ الْمُؤَنَّثَةُ",
                    penjelasan: "Dan isim-isim mufrad (tunggal) dan isim-isim mutsanna (dua).\nDan isim-isim majmu' (jamak) dan isim-isim mu'annats (perempuan)."
                },
                {
                    nadzom: "وَالْأَسْمَاءُ الْمُذَكَّرَةُ وَالْأَسْمَاءُ الْمُعَرَّفَةُ ۞ وَالْأَسْمَاءُ الْمُنَكَّرَةُ وَالْأَسْمَاءُ الْمُبْهَمَةُ",
                    penjelasan: "Dan isim-isim mudzakkar (laki-laki) dan isim-isim mu'arraf (yang dima'rifatkan).\nDan isim-isim munakkar (yang dinakirahkan) dan isim-isim mubham (yang tidak jelas)."
                },
                {
                    nadzom: "وَالْأَسْمَاءُ الْمُضَافَةُ وَالْأَسْمَاءُ الْمُشْتَقَّةُ ۞ وَالْأَسْمَاءُ الْمُصَغَّرَةُ وَالْأَسْمَاءُ الْمَنْسُوبَةُ",
                    penjelasan: "Dan isim-isim mudhaf (yang disandarkan) dan isim-isim musytaq (yang diturunkan).\nDan isim-isim mushagghar (yang dikecilkan) dan isim-isim mansub (yang dinisbatkan)."
                },
                {
                    nadzom: "وَالْأَسْمَاءُ الْمُكَبَّرَةُ وَالْأَسْمَاءُ الْمُفْرَدَةُ ۞ وَالْأَسْمَاءُ الْمُثَنَّاةُ وَالْأَسْمَاءُ الْمَJMU'AH",
                    penjelasan: "Dan isim-isim mukabbar (yang dibesarkan) dan isim-isim mufrad (tunggal).\nDan isim-isim mutsanna (dua) dan isim-isim majmu' (jamak)."
                },
                {
                    nadzom: "وَالْأَسْمَاءُ الْمُؤَنَّثَةُ وَالْأَسْمَاءُ الْمُذَكَّرَةُ ۞ وَالْأَسْمَاءُ الْمُعَرَّفَةُ وَالْأَسْمَاءُ الْمُنَكَّرَةُ",
                    penjelasan: "Dan isim-isim mu'annats (perempuan) dan isim-isim mudzakkar (laki-laki).\nDan isim-isim mu'arraf (yang dima'rifatkan) dan isim-isim munakkar (yang dinakirahkan)."
                },
                {
                    nadzom: "وَالْأَسْمَاءُ الْمُبْهَمَةُ وَالْأَسْمَاءُ الْمُضَافَةُ ۞ وَالْأَسْمَاءُ الْمُشْتَقَّةُ وَالْأَسْمَاءُ الْمُصَغَّرَةُ",
                    penjelasan: "Dan isim-isim mubham (yang tidak jelas) dan isim-isim mudhaf (yang disandarkan).\nDan isim-isim musytaq (yang diturunkan) dan isim-isim mushagghar (yang dikecilkan)."
                },
                {
                    nadzom: "وَالْأَسْمَاءُ الْمَنْسُوبَةُ وَالْأَسْمَاءُ الْمُكَبَّرَةُ ۞ وَالْأَسْمَاءُ الْمُفْرَدَةُ وَالْأَسْمَاءُ الْمُثَنَّاةُ",
                    penjelasan: "Dan isim-isim mansub (yang dinisbatkan) dan isim-isim mukabbar (yang dibesarkan).\nDan isim-isim mufrad (tunggal) dan isim-isim mutsanna (dua)."
                },
                {
                    nadzom: "وَالْأَسْمَاءُ الْمَJMU'AH WA AL-ASMAA' AL-MU'ANNATHAH ۞ WA AL-ASMAA' AL-MUDZAKKARAH WA AL-ASMAA' AL-MU'ARRAFAH",
                    penjelasan: "Dan isim-isim majmu' (jamak) dan isim-isim mu'annats (perempuan).\nDan isim-isim mudzakkar (laki-laki) dan isim-isim mu'arraf (yang dima'rifatkan)."
                },
                {
                    nadzom: "وَالْأَسْمَاءُ الْمُنَكَّرَةُ وَالْأَسْمَاءُ الْمُبْهَمَةُ ۞ وَالْأَسْمَاءُ الْمُضَافَةُ وَالْأَسْمَاءُ الْمُشْتَقَّةُ",
                    penjelasan: "Dan isim-isim munakkar (yang dinakirahkan) dan isim-isim mubham (yang tidak jelas).\nDan isim-isim mudhaf (yang disandarkan) dan isim-isim musytaq (yang diturunkan)."
                },
                {
                    nadzom: "وَAL-ASMAA' AL-MUSAGHGHARAH WA AL-ASSAA' AL-MANSUUBAH",
                    penjelasan: "Dan isim-isim mushagghar (yang dikecilkan) dan isim-isim mansub (yang dinisbatkan)."
                }
            ]
        },
        "101-200": {
            "Bab Isim Nakirah dan Ma'rifah": [
                {
                    nadzom: "نَكِرَةٌ قَابِلَةُ أَلْ مُؤَثِّرَا ۞ أَوْ وَاقِعٌ مَوْقِعَ مَا قَدْ ذُكِرَا",
                    penjelasan: "Nakirah adalah isim yang menerima alif lam yang memberi pengaruh (ma'rifah).\nAtau isim yang menempati posisi isim yang telah disebutkan (sebagai nakirah)."
                },
                {
                    nadzom: "وَغَيْرُهُ مَعْرِفَةٌ كَهُمْ وَذِي ۞ وَهِنْدَ وَابْنِي وَالْغُلاَمِ وَالَّذِي",
                    penjelasan: "Selain nakirah adalah ma'rifah, seperti 'hum' (mereka), 'dzi' (ini).\nDan 'Hindun', dan 'ibni' (anakku), dan 'al-ghulami' (anak laki-laki itu), dan 'alladzi' (yang)."
                }
            ],
            "Bab Isim Alam": [
                {
                    nadzom: "فَمَا لِذَاتٍ أَوْ لِمَعْنًى عُلِمْ ۞ بِهِ فَعَلَمٌ كَجَعْفَرٍ وَخَتِمْ",
                    penjelasan: "Maka apa yang diketahui untuk suatu zat atau makna dengannya, maka itu adalah alam (nama diri), seperti Ja'far dan Khatim."
                },
                {
                    nadzom: "وَقَرَنٍ وَعَدَنٍ وَلاَحِقِ ۞ وَشَدْقَمٍ وَنَحْوِهِ مِنْ سَابِقِ",
                    penjelasan: "Dan Qaran, dan 'Adan, dan Lahik.\nDan Syadqam, dan yang semisalnya dari yang terdahulu."
                }
            ]
        },
        "201-300": {
            "Bab Isim Isyarah": [
                {
                    nadzom: "بِذَا لِمُفْرَدٍ مُذَكَّرٍ أَشِرْ ۞ بِذِي وَذَاتِ تَا عَلَى الْأُنْثَى اقْتَصِرْ",
                    penjelasan: "Dengan 'dza' tunjuklah untuk mufrad mudzakkar.\nDengan 'dzi' dan 'tati' khususkan untuk mu'annats."
                },
                {
                    nadzom: "وَبِأُولَى أَشِرْ لِجَمْعٍ مُطْلَقَا ۞ وَالْمَدُّ أَوْلَى وَلَدَى الْبُعْدِ انْطَلَقَا",
                    penjelasan: "Dan dengan 'ula' tunjuklah untuk jamak secara mutlak.\nDan mad (memanjangkan) lebih utama, dan untuk yang jauh, ia berlaku."
                }
            ],
            "Bab Isim Maushul": [
                {
                    nadzom: "مَوْصُولُ الْأَسْمَاءِ الَّذِي الْأُنْثَى الَّتِي ۞ وَالْيَا إِذَا مَا ثُنِّيَا لاَ تُثْبِتِ",
                    penjelasan: "Isim maushul adalah 'alladzi' untuk mudzakkar, 'allati' untuk mu'annats.\nDan ya' jika di-tasniyah-kan (dua), janganlah engkau tetapkan."
                },
                {
                    nadzom: "بَلْ مَا تَلِيهِ وَالْوَاوُ إِنْ تُجْمَعْ ذُكُورْ ۞ وَالْيَا مَعَ اللَّاتِي كَطِفْلٍ وَالْحُورْ",
                    penjelasan: "Bahkan apa yang mengikutinya, dan wawu jika jamak mudzakkar.\nDan ya' bersama 'allati' seperti 'thiflun' dan 'al-hur'."
                }
            ]
        },
        // Tambahkan rentang bait lainnya hingga 1000 dengan bab-bab yang relevan
        // Contoh:
        "301-400": {
            "Bab Mubtada' dan Khabar": [
                {
                    nadzom: "الْمُبْتَدَأُ اسْمٌ رُفِعَ عَنْ عَوَامِلِ ۞ لَفْظِيَّةٍ وَالْخَبَرُ الْجُزْءُ الْمُكَمِّلِ",
                    penjelasan: "Mubtada' adalah isim yang di-rafa'-kan dari amil-amil lafzhiyah.\nDan khabar adalah bagian yang menyempurnakan."
                }
            ]
        },
        "401-500": {
            "Bab Kana dan Saudara-saudaranya": [
                {
                    nadzom: "تَرْفَعُ كَانَ الْمُبْتَدَأَ اسْمًا وَالْخَبَرْ ۞ تَنْصِبُهُ كَكَانَ زَيْدٌ مُسْتَقِرْ",
                    penjelasan: "Kana me-rafa'-kan mubtada' sebagai isimnya, dan khabar.\nIa me-nashab-kannya, seperti 'Kana Zaidun mustaqirr' (Zaid adalah orang yang tetap)."
                }
            ]
        },
        "501-600": {
            "Bab Inna dan Saudara-saudaranya": [
                {
                    nadzom: "إِنَّ وَأَنَّ وَلَكِنَّ وَكَأَنْ ۞ لَيْتَ لَعَلَّ عَكْسُ كَانَ وَزَنْ",
                    penjelasan: "Inna, anna, lakinna, ka'anna.\nLaita, la'alla, kebalikan dari kana dalam timbangan (pengaruhnya)."
                }
            ]
        },
        "601-700": {
            "Bab Fa'il": [
                {
                    nadzom: "الْفَاعِلُ اسْمٌ أُسْنِدَ الْفِعْلُ لَهُ ۞ عَلَى طَرِيقَةِ الْفِعْلِ الْمُبْتَدَأِ بِهِ",
                    penjelasan: "Fa'il adalah isim yang fi'il disandarkan kepadanya.\nDengan cara fi'il yang dimulai dengannya."
                }
            ]
        },
        "701-800": {
            "Bab Na'ibul Fa'il": [
                {
                    nadzom: "يُنَابُ عَنْ فَاعِلٍ مَفْعُولٌ بِهِ ۞ أَوْ مَصْدَرٌ أَوْ ظَرْفٌ أَوْ جَارٌ وَمُضَافٌ لَهُ",
                    penjelasan: "Digantikan dari fa'il adalah maf'ul bih.\nAtau mashdar, atau zharf, atau jar dan majrur yang disandarkan kepadanya."
                }
            ]
        },
        "801-900": {
            "Bab Mubtada' dan Khabar (Lanjutan)": [
                {
                    nadzom: "وَمَا لِذِي الْوَصْفِ شَبِيهٌ بِالْفِعَلْ ۞ فَهُوَ مُبْتَدَأٌ وَخَبَرُهُ قَدْ حَصَلْ",
                    penjelasan: "Dan apa yang bagi sifat menyerupai fi'il.\nMaka ia adalah mubtada' dan khabarnya telah terjadi."
                }
            ]
        },
        "901-1002": {
            "Bab Tawaabi' (Pengikut)": [
                {
                    nadzom: "التَّوَابِعُ النَّعْتُ وَالتَّوْكِيدُ وَالْبَدَلْ ۞ وَالْعَطْفُ وَالْجَرُّ وَالرَّفْعُ وَالنَّصْبُ وَالْجَزْمُ وَالْخَفْضُ وَالْجَرُّ",
                    penjelasan: "Tawaabi' adalah na'at, taukid, dan badal.\nDan 'athaf, dan jar, dan rafa', dan nashab, dan jazm, dan khafdh, dan jar."
                }
            ]
        }
    };

    const baitRangeContainer = document.getElementById('baitRangeContainer');
    const chapterSelection = document.getElementById('chapterSelection');
    const chapterListContainer = document.getElementById('chapterListContainer');
    const nadzomListSection = document.getElementById('nadzomListSection');
    const nadzomAccordion = document.getElementById('nadzomAccordion');
    const currentChapterTitle = document.getElementById('currentChapterTitle');
    const backToChaptersButton = document.getElementById('backToChapters');
    const backToRangesFromChaptersButton = document.getElementById('backToRangesFromChapters'); // New button

    let selectedRange = null;

    // Function to display bait range buttons
    function displayBaitRanges() {
        console.log("Displaying Bait Ranges"); // Debugging
        baitRangeContainer.innerHTML = '';
        Object.keys(nadzomData).forEach(range => {
            const button = document.createElement('button');
            button.classList.add('range-button');
            button.textContent = `Bait ${range}`;
            button.addEventListener('click', () => {
                selectedRange = range;
                displayChapters(range);
            });
            baitRangeContainer.appendChild(button);
        });
        chapterSelection.style.display = 'none';
        nadzomListSection.style.display = 'none';
        document.querySelector('.nadzom-selection').style.display = 'block'; // Ensure range selection is visible
        backToChaptersButton.style.display = 'none'; // Hide back button when at ranges
        backToRangesFromChaptersButton.style.display = 'none'; // Hide new back button
        // Ensure no old listeners are active for backToChaptersButton
        backToChaptersButton.removeEventListener('click', handleBackToChapters);
        // backToChaptersButton.removeEventListener('click', handleBackToRanges); // This listener is now for backToRangesFromChaptersButton
    }

    // Function to display chapters for a selected bait range
    function displayChapters(range) {
        console.log(`Displaying Chapters for range: ${range}`); // Debugging
        chapterListContainer.innerHTML = '';
        const chapters = nadzomData[range];
        if (!chapters) {
            console.error(`No chapters found for range: ${range}`);
            // Optionally, display an error message to the user or go back to range selection
            displayBaitRanges();
            return;
        }

        for (const chapterName in chapters) {
            const button = document.createElement('button');
            button.classList.add('chapter-button');
            button.textContent = chapterName;
            button.addEventListener('click', () => {
                loadNadzom(range, chapterName);
            });
            chapterListContainer.appendChild(button);
        }
        chapterSelection.style.display = 'block';
        nadzomListSection.style.display = 'none';
        document.querySelector('.nadzom-selection').style.display = 'none'; // Hide range selection
        backToChaptersButton.style.display = 'none'; // Hide the "Back to Chapters" button (it's for nadzom view)
        backToRangesFromChaptersButton.style.display = 'block'; // Show the new "Back to Ranges" button
        
        // Remove existing listeners before adding a new one for backToRangesFromChaptersButton
        backToRangesFromChaptersButton.removeEventListener('click', handleBackToRanges);
        backToRangesFromChaptersButton.addEventListener('click', handleBackToRanges); // Add new listener for "Back to Ranges"
    }

    // Function to load nadzom for a selected chapter
    function loadNadzom(range, chapterName) {
        console.log(`Loading Nadzom for chapter: ${chapterName} in range: ${range}`); // Debugging
        nadzomAccordion.innerHTML = '';
        const chapterNadzom = nadzomData[range][chapterName];
        if (!chapterNadzom) {
            console.error(`No nadzom found for chapter: ${chapterName} in range: ${range}`);
            // Optionally, display an error message to the user or go back to chapter selection
            displayChapters(range);
            return;
        }
        currentChapterTitle.textContent = `(${chapterName} - Bait ${range})`;

        chapterNadzom.forEach((data, index) => {
            const accordionItem = document.createElement('div');
            accordionItem.classList.add('accordion-item');

            const accordionHeader = document.createElement('div');
            accordionHeader.classList.add('accordion-header');
            accordionHeader.setAttribute('aria-expanded', 'false');

            const nadzomText = document.createElement('div');
            nadzomText.classList.add('nadzom-arabic');
            nadzomText.innerHTML = data.nadzom.replace(/\n/g, '<br>');

            const icon = document.createElement('span');
            icon.classList.add('accordion-icon');
            const faIcon = document.createElement('i');
            faIcon.classList.add('fas', 'fa-chevron-right');
            icon.appendChild(faIcon);

            accordionHeader.appendChild(icon);
            accordionHeader.appendChild(nadzomText);

            const accordionContent = document.createElement('div');
            accordionContent.classList.add('accordion-content');
            accordionContent.innerHTML = data.penjelasan.replace(/\n/g, '<br>');
            accordionContent.setAttribute('aria-hidden', 'true');

            accordionHeader.addEventListener('click', () => {
                const isActive = accordionHeader.classList.toggle('active');
                accordionContent.style.display = isActive ? 'block' : 'none';
                if (isActive) {
                    faIcon.classList.remove('fa-chevron-right');
                    faIcon.classList.add('fa-chevron-down');
                } else {
                    faIcon.classList.remove('fa-chevron-down');
                    faIcon.classList.add('fa-chevron-right');
                }
                accordionHeader.setAttribute('aria-expanded', isActive);
                accordionContent.setAttribute('aria-hidden', !isActive);
            });

            accordionItem.appendChild(accordionHeader);
            accordionItem.appendChild(accordionContent);
            nadzomAccordion.appendChild(accordionItem);
        });

        chapterSelection.style.display = 'none';
        nadzomListSection.style.display = 'block';
        backToChaptersButton.style.display = 'block'; // Show back button for "Back to Chapters"
        backToRangesFromChaptersButton.style.display = 'none'; // Hide the "Back to Ranges" button
        // Remove existing listeners before adding a new one for backToChaptersButton
        backToChaptersButton.removeEventListener('click', handleBackToChapters);
        backToChaptersButton.addEventListener('click', handleBackToChapters); // Add new listener for "Back to Chapters"
    }

    // Handler for "Back to Chapters" button when viewing nadzom
    function handleBackToChapters() {
        console.log("Back to Chapters clicked. Current range:", selectedRange); // Debugging
        nadzomListSection.style.display = 'none';
        if (selectedRange) {
            displayChapters(selectedRange); // Go back to chapter selection for the current range
        } else {
            // Fallback if selectedRange is somehow lost
            displayBaitRanges();
        }
    }

    // Handler for "Back to Ranges" button when viewing chapters
    function handleBackToRanges() {
        console.log("Back to Ranges clicked."); // Debugging
        chapterSelection.style.display = 'none';
        document.querySelector('.nadzom-selection').style.display = 'block'; // Show range selection
        backToRangesFromChaptersButton.style.display = 'none'; // Hide this back button
        selectedRange = null; // Reset selected range
        // Ensure no old listeners are active for backToRangesFromChaptersButton
        backToRangesFromChaptersButton.removeEventListener('click', handleBackToRanges);
    }

    // Initial display
    displayBaitRanges();
});


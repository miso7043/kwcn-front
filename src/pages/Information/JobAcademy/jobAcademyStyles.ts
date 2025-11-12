// Job Academy 공통 스타일 상수들

export const jobAcademyStyles = {
    // 메인 섹션 스타일
    section: {
        basic: "bg-amber-100/50 mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
        minHeight: "min-h-screen",
        blackCard: "bg-black rounded-lg p-8 border-l-4 border-blue-500",
        amberCard: "bg-amber-100/50 rounded-lg p-8",
        amberCardEmerald: "bg-amber-100/50 rounded-lg p-8",
        amberCardRed: "bg-amber-100/50 rounded-lg p-8",
        amberCardYellow: "bg-amber-100/50 rounded-lg p-8",
        yellowWarning: "bg-yellow-500 border border-yellow-400 p-4 rounded-lg",
        highlightInBox: "bg-yellow-200/60 shadow-sm p-6 rounded-lg border-l-4 border-yellow-400 mt-6"
    },

    // 컨테이너 스타일
    containers: {
        centerContainer: "max-w-[90%] md:max-w-[80%]  mx-auto py-8",
        overflowHidden: "relative overflow-hidden",
        heroBackground: "relative bg-cover bg-center bg-no-repeat min-h-[300px] flex flex-col justify-center items-center",
        lectureImageWrapper: "relative max-w-[90%] md:max-w-[80%] mx-auto rounded-lg overflow-hidden mt-3",

        imageResponsive: "w-full h-auto object-contain",
        fullWidthImage: "w-full rounded-lg shadow-lg",   // 3

        lightGrayBox: "bg-gray-600 p-4 rounded-lg",
        grayBox: "bg-gray-800 p-4 rounded-lg",
        orangeBox: "bg-orange-200 p-6 rounded-lg",
        cyanLightInfo: "bg-cyan-700/10 p-6 rounded-lg",
        cyanBox: "bg-cyan-900/20 p-6 rounded-lg",   // 2
        stoneLightBox: "bg-stone-300 p-6 rounded-lg",
        lightBox: "bg-amber-100 p-6 rounded-lg",
        amberLightBox: "bg-amber-200/50 p-6 rounded-lg",  // NEW
        yellowLightBox: "bg-yellow-200/70 p-6 rounded-lg",  // NEW
        emeraldLightBox: "bg-emerald-200/50 p-6 rounded-lg",  // NEW
    },

    // 섹션 제목 스타일
    sectionTitle: "text-black text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative",

    // 섹션 제목의 빨간 줄 (::after를 대체하는 별도 요소용)
    sectionTitleAccent: "absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1",

    // 카드 스타일들
    certificateCard: "bg-gray-800 text-white p-6 rounded-xl hover:-translate-y-1 hover:shadow-lg transition-all duration-300",
    competencyCard: "bg-white/10 p-6 rounded-lg my-8 shadow-lg transition-all duration-300 border border-gray-200/90",

    // 그리드 레이아웃들
    grids: {
        singleColumn: "grid gap-5",
        twoColumn: "grid grid-cols-1 md:grid-cols-2 gap-6",
        twoThreeColumn: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
        threeColumn: "grid grid-cols-1 md:grid-cols-3 gap-6",
    },

    // 간격 스타일
    spacing: {
        marginBottom4: "mb-4",
        marginBottom6: "mb-6",
        marginBottom8: "mb-8",
        marginBottom12: "mb-12",
        marginBottom2: "mb-2",
        marginLeft2: "ml-2",
        marginRight2: "mr-2",
        itemSpacing: "space-y-2",
        listSpacing: "space-y-1",
        largeSpacing: "space-y-4",
        sectionSpacing: "space-y-6",
        questionSpacing: "space-y-4",
    },

    borders: {
        leftGray: "border-l-4 border-gray-500",
        leftBlue400: "border-l-2 border-blue-400",
        leftBlue: "border-l-4 border-blue-500",
        leftLime: "border-l-4 border-lime-500",
        leftEmerald: "border-l-4 border-emerald-500",
        leftCyan: "border-l-4 border-cyan-500",
        leftYellow: "border-l-4 border-yellow-500",
        leftOrange: "border-l-4 border-orange-500",
        leftRose: "border-l-4 border-rose-500",
        leftGreen: "border-l-4 border-green-500",
        leftRed: "border-l-4 border-red-500",
    },

    // 텍스트 색상
    textColors: {
        white: "text-white",
        grayDark: "text-gray-900",
        grayLight: "text-gray-800",
        grayParagraph: "text-gray-800 text-lg mb-6",
        grayTextSpaced: "text-gray-800 space-y-2",
        grayTextLarge: "text-gray-800 text-lg",

        link: "text-blue-800 hover:underline",
        darkZinc: "text-zinc-800",

        redLight: "text-red-100",
        redText: "text-red-300",

        amberNote: "text-amber-600",
        warning: "text-yellow-400",

        greenText: "text-green-300",
        orangeEmphasis: "text-orange-400",
        cyanLight: "text-cyan-200",
        purpleLight: "text-purple-200",
    },

    // 제목 스타일
    headings: {
        h1: "text-black text-3xl font-bold",
        h2: "text-black text-2xl font-bold",
        h3: "text-black text-xl font-semibold",
        h4: "text-black text-xl font-bold",
        h5: "text-black text-lg font-bold",
        whiteH2: "text-black text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative",
        lectureNumber: "font-bold text-black drop-shadow-lg text-[clamp(1rem,2.5vw,3rem)]",
        lectureTitle: "text-white text-[clamp(1rem,2.5vw,3rem)] font-bold drop-shadow-lg",
        whiteH3Border: "text-black text-xl font-semibold border-b border-white/30",
    },

    // 특별 요소들
    topBadge: "absolute -top-3 left-6 bg-green-700/50 text-white px-3 py-1 rounded-full text-sm font-bold",
    absolutePositions: {
        lectureNumberPos: "absolute left-[39%] top-[39%]",
        lectureTitlePos: "absolute left-[66%] top-[38%]",
    },

    // 링크 버튼 스타일
    linkButton: "text-black bg-white hover:bg-amber-200 shadow-sm inline-flex items-center px-4 py-2 rounded-lg transition-colors duration-200",
    linkButtonSmall: "text-black bg-white hover:bg-amber-200 shadow-sm inline-flex items-center max-w-[12rem] px-4 py-2 rounded-lg transition-colors duration-200",

    // 기타 유용한 스타일들
    // videoContainer: "my-8 flex justify-center w-full max-w-4xl",
    // videoWrapper: "relative w-full",
    // imageContainer: "p-[10%] h-auto object-contain",

    // 리스트 및 텍스트 스타일들
    listStyles: {
        checkItem: "relative pl-6 text-gray-900",
        checkMark: "absolute left-0 text-green-400 font-bold",
        bulletList: "list-disc list-inside space-y-2 text-gray-800",
        // keyPointIcon: "absolute left-0",
    },

    // 특수 텍스트 스타일들
    specialText: {
        // quote: "text-red-300 text-2xl italic text-center my-6 p-4 bg-gray-800 border-l-4 border-red-500 rounded",
        emphasis: "leading-relaxed opacity-95",
        cardTitle: "text-xl font-bold mb-4",
        cardDescription: "leading-relaxed opacity-95 mb-4",
        subheading: "text-white font-bold drop-shadow-lg",
    },

    // 버튼 스타일들
    buttons: {
        primary: "inline-block bg-gradient-to-r from-indigo-800 to-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-colors",
    },

    icons: {
        circleIcon: "bg-blue-500 text-white font-black text-2xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0",
    },

    table: {
        oddRow: "bg-zinc-100",
        evenRow: "bg-stone-300",
        header: "bg-amber-200",
        // container: "overflow-x-auto",
        table: "w-full bg-gray-800 rounded-lg overflow-hidden",
        headerCell: "p-4 text-left text-zinc-900 font-bold",
        firstCell: "p-4 text-stone-900 font-semibold",
        cell: "p-4 text-gray-800",
    },
} as const;
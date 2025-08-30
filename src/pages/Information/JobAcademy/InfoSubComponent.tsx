import React from 'react';
import { highlightStrong } from '../../../components/utils/Util';

export interface SubSection {
    title: string;
    items: string[];
    titleColor?: string;
    borderColor?: string;
}

export interface NumberedList {
    items: string[];
    borderColor?: string;
    textColor?: string;
}

export interface IconList {
    items: string[];
    icon: string;
    iconColor: string;
    borderColor?: string;
}

export interface QuestionList {
    questions: string[];
    borderColor?: string;
    textColor?: string;
}

export interface SectionWithSubSections {
    title: string;
    subSections: SubSection[];
}

export interface StepWithDetails {
    step: string;
    details: string[];
    borderColor?: string;
}

export interface StepsList {
    steps: StepWithDetails[];
    borderColor?: string;
}

export interface TaskWithTips {
    title: string;
    description: string;
    tips: string[];
}

export interface TasksList {
    tasks: TaskWithTips[];
    borderColor?: string;
}

export interface StarItem {
    letter: string;
    title: string;
    description: string;
    example: string;
}

// 생각해보기 패턴을 위한 인터페이스
export interface ThinkingBox {
    title: string;
    questions: string[];
    bgColor?: string;
    textColor?: string;
}

// 비교 테이블을 위한 인터페이스
export interface TableProps {
    title: string;
    headers: string[];
    rows: string[][];
}

// 문화 비교 아이템을 위한 인터페이스
export interface CultureComparisonItem {
    title: string;
    borderColor: string;
    korea: {
        title: string;
        description: string;
    };
    canada: {
        title: string;
        description: string;
    };
}

export interface CultureComparisonListProps {
    items: CultureComparisonItem[];
}

// 참고 자료 섹션을 위한 인터페이스
export interface ReferenceItem {
    items: string[];
}

export interface ReferenceListProps {
    leftColumn: ReferenceItem;
    rightColumn: ReferenceItem;
}

// 제목이 있는 2컬럼 리스트를 위한 인터페이스
export interface TitledColumnItem {
    title: string;
    items: string[];
}

export interface TitledTwoColumnListProps {
    leftColumn: TitledColumnItem;
    rightColumn: TitledColumnItem;
}

// 단일 제목이 있는 리스트를 위한 인터페이스 (작은 제목 + 리스트 패턴)
export interface SingleTitledListProps {
    title: string;
    items: string[];
    titleClass?: string;
    textColor?: string;
}

// 정보 박스를 위한 인터페이스 (제목 + 설명 + 리스트 패턴)
export interface InfoBox {
    title: string;
    description: string;
    items: string[];
    bgColor?: string;
    textColor?: string;
}

export interface InfoBoxProps {
    title: string;
    description: string;
    items: string[];
    bgColor?: string;
    textColor?: string;
}

// 단계별 가이드를 위한 인터페이스 (제목 + 색깔별 단계 설명 패턴)
export interface StepGuideItem {
    stepTitle: string;
    stepDescription: string;
    borderColor: string;
    titleColor: string;
}

export interface StepGuideProps {
    title: string;
    steps: StepGuideItem[];
    bgColor?: string;
    textColor?: string;
}


// h3 + ul 패턴을 위한 컴포넌트
export const SubSectionWithList: React.FC<SubSection> = ({ title, items, titleColor = "text-white", borderColor = "border-blue-500" }) => (
    <div className={`bg-gray-900 p-6 rounded-lg border-l-4 ${borderColor}`}>
        {title && <h3 className={`${titleColor} text-xl font-bold mb-4`}>{title}</h3>}
        <ul className="text-gray-200 space-y-2">
            {items.map((item, index) => {
                const html = highlightStrong(item);
                return <li key={index}>• <span dangerouslySetInnerHTML={{ __html: html }} /></li>;
            })}
        </ul>
    </div>
);

// 번호가 매겨진 리스트 컴포넌트
export const NumberedListComponent: React.FC<NumberedList> = ({ items, borderColor = "border-blue-500", textColor = "text-blue-400" }) => (
    <div className="space-y-4">
        {items.map((item, index) => (
            <div key={index} className={`bg-gray-800 p-4 rounded-lg border-l-4 ${borderColor}`}>
                <span className={`${textColor} font-bold`}>{index + 1}. </span>
                <span className="text-gray-200">{item}</span>
            </div>
        ))}
    </div>
);

// 아이콘 리스트 컴포넌트
export const IconListComponent: React.FC<IconList> = ({ items, icon, iconColor, borderColor = "border-gray-500" }) => (
    <div className="grid gap-4">
        {items.map((item, index) => (
            <div key={index} className={`bg-gray-800 p-4 rounded-lg border-l-4 ${borderColor}`}>
                <span className={`${iconColor} font-bold`}>{icon} </span>
                <span className="text-gray-200">{item}</span>
            </div>
        ))}
    </div>
);

// 질문 리스트 컴포넌트 (세로 배열)
export const QuestionListComponent: React.FC<QuestionList> = ({ questions, borderColor = "border-yellow-500", textColor = "text-yellow-300" }) => (
    <div className="space-y-4">
        {questions.map((question, index) => (
            <div key={index} className={`bg-gray-800 p-6 rounded-lg border-l-4 ${borderColor}`}>
                <h3 className={`${textColor} font-bold mb-2`}>{question}</h3>
            </div>
        ))}
    </div>
);

// h2 + 여러 SubSectionWithList 패턴을 위한 컴포넌트
export const SectionWithSubSectionsComponent: React.FC<SectionWithSubSections> = ({ title, subSections }) => (
    <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
       {title &&  <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {title}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
        </h2>}

        <div className="space-y-6">
            {subSections.map((subSection, index) => (
                <SubSectionWithList key={index} {...subSection} />
            ))}
        </div>
    </section>
);

// 제목 + 설명 + 팁 리스트 컴포넌트 (면접 후 할 일 패턴)
export const TasksListComponent: React.FC<TasksList> = ({ tasks, borderColor = "border-emerald-500" }) => (
    <div className="space-y-4">
        {tasks.map((item, index) => (
            <div key={index} className={`bg-gray-800 p-6 rounded-lg border-l-4 ${borderColor}`}>
                {item.title && <h3 className="text-white text-xl font-bold mb-4">{item.title}</h3>}
                {item.description && <p className="text-gray-200 mb-4">{item.description}</p>}
                <ul className="text-gray-200 space-y-2">
                    {item.tips.map((tip, tipIndex) => (
                        <li key={tipIndex}>• {tip}</li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
);

// STAR 기법 컴포넌트 (원형 아이콘 + 제목 + 설명 + 예시 패턴)
export const StarMethodComponent: React.FC<{ items: StarItem[] }> = ({ items }) => (
    <div className="grid gap-4">
        {items.map((item, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-start space-x-4">
                    <div className="bg-blue-500 text-white font-black text-2xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        {item.letter}
                    </div>
                    <div>
                        <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-200 mb-3">{item.description}</p>
                        <p className="text-gray-300 italic">{item.example}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

// 생각해보기 박스 컴포넌트 (그라데이션 배경 + 질문 리스트)
export const ThinkingBoxComponent: React.FC<ThinkingBox> = ({
    title,
    questions,
    bgColor = "bg-gradient-to-r from-blue-800/30 to-blue-700/30",
    textColor = "text-blue-100"
}) => (
    <div className={`${bgColor} p-6 rounded-lg mb-6`}>
        {title && <h3 className={`${textColor} text-xl font-bold mb-4`}>{title}</h3>}
        <ul className={`${textColor} space-y-2`}>
            {questions.map((question, index) => (
                <li key={index}>• {question}</li>
            ))}
        </ul>
    </div>
);

// 비교 테이블 컴포넌트 (한국 vs 캐나다 문화 비교 등)
export const TableComponent: React.FC<TableProps> = ({ title, headers, rows }) => (
    <section className="bg-black mb-8 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <h2 className="text-white text-3xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative">
            {title}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500 -mb-1"></span>
        </h2>

        <div className="overflow-x-auto">
            <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
                <thead>
                    <tr className="bg-gray-900">
                        {headers.map((header, index) => (
                            <th key={index} className="p-4 text-left text-white font-bold">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row: string[], index: number) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-800" : "bg-gray-750"}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className={`p-4 ${cellIndex === 0 ? "text-blue-300 font-semibold" : "text-gray-300"}`}>
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </section>
);

// 문화 비교 리스트 컴포넌트 (고맥락 vs 저맥락 등 패턴)
export const CultureComparisonListComponent: React.FC<CultureComparisonListProps> = ({ items }) => (
    <div className="grid grid-cols-1 gap-6">
        {items.map((item: CultureComparisonItem, index: number) => (
            <div key={index} className={`bg-gray-800 p-6 rounded-lg border-l-4 ${item.borderColor}`}>
                {item.title && <h3 className="text-white text-xl font-bold mb-4">{item.title}</h3>}
                <div className="grid grid-cols-2 gap-6">
                    <div className="bg-gray-900 p-3 rounded border-l-2 border-blue-400">
                        <h3 className="text-white font-semibold">{item.korea.title}</h3>
                        <p className="text-gray-300">{item.korea.description}</p>
                    </div>
                    <div className="bg-gray-900 p-3 rounded border-l-2 border-blue-400">
                        <h3 className="text-white font-semibold">{item.canada.title}</h3>
                        <p className="text-gray-300">{item.canada.description}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

// 참고 자료 리스트 컴포넌트 (2컬럼 리스트 패턴)
export const ReferenceListComponent: React.FC<ReferenceListProps> = ({ leftColumn, rightColumn }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-gray-200">
            {leftColumn.items.map((item: string, index: number) => (
                <p key={index} className="mb-2">• {item}</p>
            ))}
        </div>
        <div className="text-gray-200">
            {rightColumn.items.map((item: string, index: number) => (
                <p key={index} className="mb-2">• {item}</p>
            ))}
        </div>
    </div>
);

// 제목이 있는 2컬럼 리스트 컴포넌트 (제목 + 리스트 패턴)
export const TitledTwoColumnListComponent: React.FC<TitledTwoColumnListProps> = ({ leftColumn, rightColumn }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="text-gray-200">
            {leftColumn.title && <p className="mb-3">{leftColumn.title}</p>}
            <ul className="space-y-1">
                {leftColumn.items.map((item: string, index: number) => (
                    <li key={index}>• <span dangerouslySetInnerHTML={{ __html: highlightStrong(item) }} /></li>
                ))}
            </ul>
        </div>
        <div className="text-gray-200">
            {rightColumn.title && <p className="mb-3">{rightColumn.title}</p>}
            <ul className="space-y-1">
                {rightColumn.items.map((item: string, index: number) => (
                    <li key={index}>• <span dangerouslySetInnerHTML={{ __html: highlightStrong(item) }} /></li>
                ))}
            </ul>
        </div>
    </div>
);

// 단일 제목이 있는 리스트 컴포넌트 (작은 제목 + 리스트 패턴)
export const SingleTitledListComponent: React.FC<SingleTitledListProps> = ({
    title,
    items,
    titleClass = "font-semibold mb-2",
    textColor = "text-gray-200"
}) => (
    <div className="bg-gray-900 p-6 rounded-lg">
        <div className={textColor}>
            {title && <p className={titleClass}>{title}:</p>}
            <ul className="space-y-1">
                {items.map((item: string, index: number) => (
                    <li key={index}>• {item}</li>
                ))}
            </ul>
        </div>
    </div>
);

// 정보 박스 컴포넌트 (제목 + 설명 + 리스트 패턴)
export const InfoBoxComponent: React.FC<InfoBoxProps> = ({
    title,
    description,
    items,
    bgColor = "bg-cyan-900/20",
    textColor = "text-white"
}) => (
    <div className={`${bgColor} p-6 rounded-lg`}>
        {title && <h3 className={`${textColor} text-xl font-bold mb-4`}>{title}</h3>}
        {description && <p className={`${textColor} mb-4`}>{description}</p>}
        <ul className={`${textColor} space-y-2`}>
            {items.map((item: string, index: number) => (
                <li key={index}>• <span dangerouslySetInnerHTML={{ __html: highlightStrong(item) }} /></li>
            ))}
        </ul>
    </div>
);

// 단계별 가이드 컴포넌트 (제목 + 색깔별 단계 설명 패턴)
export const StepGuideComponent: React.FC<StepGuideProps> = ({
    title,
    steps,
    bgColor = "bg-gray-900",
    textColor = "text-white"
}) => (
    <div className={`${bgColor} p-6 rounded-lg`}>
        {title && <h3 className={`${textColor} text-xl font-bold mb-4`}>{title}</h3>}
        <div className="space-y-4">
            {steps.map((step: StepGuideItem, index: number) => (
                <div key={index} className={`border-l-4 ${step.borderColor} pl-4`}>
                    <h3 className={`${step.titleColor} font-semibold mb-2`}>{step.stepTitle}</h3>
                    <p className="text-gray-200">{step.stepDescription}</p>
                </div>
            ))}
        </div>
    </div>
);

// 작은 제목과 작은 텍스트 리스트 컴포넌트 (교육기관 리스트 등에 적합)
export interface SmallTitleListProps {
    title: string;
    items: string[];
    textColor?: string;
}

export const SmallTitleListComponent: React.FC<SmallTitleListProps> = ({
    title,
    items,
    textColor = "text-gray-200",
}) => (
    <div className={textColor}>
        {title && <p className="mb-2"><strong>{title}:</strong></p>}
        <ul className={`space-y-1`}>
            {items.map((item: string, index: number) => (
                <li key={index}>• {item}</li>
            ))}
        </ul>
    </div>
);

// 단순 2컬럼 리스트 컴포넌트 (제목 + 2컬럼 리스트, 각 컬럼에 개별 제목 없음)
export interface SimpleTwoColumnListProps {
    title?: string;
    leftColumnItems: string[];
    rightColumnItems: string[];
    bgColor?: string;
    titleColor?: string;
    textColor?: string;
    spacing?: string;
}

export const SimpleTwoColumnListComponent: React.FC<SimpleTwoColumnListProps> = ({
    title,
    leftColumnItems,
    rightColumnItems,
    bgColor = "bg-gray-900",
    titleColor = "text-white",
    textColor = "text-gray-200",
    spacing = "space-y-2"
}) => (
    (leftColumnItems?.length > 0 || rightColumnItems?.length > 0) ? (
        <div className={`${bgColor} p-6 rounded-lg`}>
            {title && <h3 className={`${titleColor} font-bold mb-3`}>{title}</h3>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {leftColumnItems?.length > 0 && (
                    <ul className={`${textColor} ${spacing}`}>
                        {leftColumnItems.map((item: string, index: number) => (
                            <li key={index}>• {item}</li>
                        ))}
                    </ul>
                )}
                {rightColumnItems?.length > 0 && (
                    <ul className={`${textColor} ${spacing}`}>
                        {rightColumnItems.map((item: string, index: number) => (
                            <li key={index}>• {item}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    ) : null
);

// 왼쪽 보더 + 제목 + 리스트 컴포넌트 (비교 설명 등에 적합)
export interface BorderedListProps {
    title: string;
    items: string[];
    borderColor?: string;
    titleColor?: string;
    textColor?: string;
    spacing?: string;
}

export const BorderedListComponent: React.FC<BorderedListProps> = ({
    title,
    items,
    borderColor = "border-blue-400",
    titleColor = "text-blue-300",
    textColor = "text-gray-200",
    spacing = "space-y-1"
}) => (
    items && items.length > 0 ? (
        <div className={`border-l-4 ${borderColor} pl-4`}>
            {title && <h3 className={`${titleColor} font-semibold mb-2`}>{title}</h3>}
            <ul className={`${textColor} ${spacing}`}>
                {items.map((item: string, index: number) => (
                    <li key={index}>• {item}</li>
                ))}
            </ul>
        </div>
    ) : null
);

// SimpleTitleList Props
interface SimpleTitleListProps {
    title: string;
    items: string[];
    titleColor?: string;
    textColor?: string;
    spacing?: string;
}

// SimpleTitleListComponent - 단순한 제목 + 목록 컴포넌트
export const SimpleTitleListComponent: React.FC<SimpleTitleListProps> = ({
    title,
    items,
    titleColor = "text-white",
    textColor = "text-white",
    spacing = "space-y-1"
}) => (
    items && items.length > 0 ? (
        <div className={textColor}>
            <h3 className={`font-semibold mb-2 ${titleColor}`}>{title}</h3>
            <ul className={`${spacing}`}>
                {items.map((item: string, index: number) => (
                    <li key={index}>• {item}</li>
                ))}
            </ul>
        </div>
    ) : null
);

// BoxList Props
interface BoxListProps {
    title: string;
    items: string[];
    bgColor?: string;
    titleColor?: string;
    textColor?: string;
    spacing?: string;
    padding?: string;
    marginBottom?: string;
}

// BoxListComponent - 박스형 배경에 제목 + 목록 컴포넌트
export const BoxListComponent: React.FC<BoxListProps> = ({
    title,
    items,
    bgColor = "bg-gray-900",
    titleColor = "text-white",
    textColor = "text-gray-200",
    spacing = "space-y-1",
    padding = "p-6",
    marginBottom = ""
}) => (
    items && items.length > 0 ? (
        <div className={`${bgColor} ${padding} rounded-lg ${marginBottom}`}>
            <h3 className={`${titleColor} font-bold mb-3`}>
                <span dangerouslySetInnerHTML={{ __html: highlightStrong(title) }} />
            </h3>
            <ul className={`${textColor} ${spacing} `}>
                {items.map((item: string, index: number) => (
                    <li key={index}>• <span dangerouslySetInnerHTML={{ __html: highlightStrong(item) }} /></li>
                ))}
            </ul>
        </div>
    ) : null
);

// SimpleReferenceListComponent interface
interface SimpleReferenceListComponentProps {
  title: string;
  items: string[];
}

// SimpleReferenceListComponent: text-gray-200 container with h3 title and simple list
export const SimpleReferenceListComponent: React.FC<SimpleReferenceListComponentProps> = ({ title, items }) => {
  return (
    <div className="text-gray-200">
      <h3 className="text-white font-bold mb-3">{title}</h3>
      <ul className="space-y-1">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

// MultiColumnList Props
interface MultiColumnListProps {
    title: string;
    columns: string[][];
    bgColor?: string;
    titleColor?: string;
    textColor?: string;
    spacing?: string;
    padding?: string;
    marginBottom?: string;
    gridCols?: string;
}

// MultiColumnListComponent - 다중 컬럼 리스트 컴포넌트
export const MultiColumnListComponent: React.FC<MultiColumnListProps> = ({
    title,
    columns,
    bgColor = "bg-gray-900",
    titleColor = "text-white",
    textColor = "text-gray-200",
    spacing = "space-y-1",
    padding = "p-6",
    marginBottom = "mb-6",
    gridCols = "grid-cols-1 md:grid-cols-3"
}) => (
    columns && columns.length > 0 ? (
        <div className={`${bgColor} ${padding} rounded-lg ${marginBottom}`}>
            <h3 className={`${titleColor} font-bold mb-3`}>{title}</h3>
            <div className={`grid ${gridCols} gap-4`}>
                {columns.map((columnItems, columnIndex) => (
                    <ul key={columnIndex} className={`${textColor} ${spacing}`}>
                        {columnItems.map((item, itemIndex) => (
                            <li key={itemIndex}>• {item}</li>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    ) : null
);

// TitleDescriptionGridComponent interface
interface TitleDescriptionItem {
    title: string;
    description: string;
}

interface TitleDescriptionGridComponentProps {
    items: TitleDescriptionItem[];
    gridCols?: string;
    textColor?: string;
    titleClass?: string;
    descriptionClass?: string;
}

// TitleDescriptionGridComponent: 제목 + 설명 그리드 컴포넌트
export const TitleDescriptionGridComponent: React.FC<TitleDescriptionGridComponentProps> = ({
    items,
    gridCols = "grid-cols-1 md:grid-cols-2",
    textColor = "text-gray-200",
    titleClass = "font-semibold mb-2",
}) => (
    items && items.length > 0 ? (
        <div className={`grid ${gridCols} gap-4`}>
            {items.map((item, index) => (
                <div key={index} className={textColor}>
                    <p className={`mb-2 ${titleClass}`}><span dangerouslySetInnerHTML={{ __html: highlightStrong(item.title) }} /></p>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    ) : null
);

// ThreeColumnStepComponent interface
interface StepItem {
    title: string;
    description: string;
    textColor?: string;
}

interface ThreeColumnStepComponentProps {
    title: string;
    steps: StepItem[];
    bgColor?: string;
    titleColor?: string;
    marginBottom?: string;
}

// ThreeColumnStepComponent: 3열 단계별 프로세스 컴포넌트
export const ThreeColumnStepComponent: React.FC<ThreeColumnStepComponentProps> = ({
    title,
    steps,
    bgColor = "bg-cyan-700/10",
    titleColor = "text-white",
    marginBottom = "mb-6"
}) => (
    <div className={`${bgColor} p-6 rounded-lg ${marginBottom}`}>
        <h3 className={`${titleColor} font-bold mb-3`}>{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((step, index) => (
                <div key={index} className={step.textColor || "text-gray-200"}>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p>{step.description}</p>
                </div>
            ))}
        </div>
    </div>
);

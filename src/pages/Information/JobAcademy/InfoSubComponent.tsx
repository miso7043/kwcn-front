import React from 'react';
import { highlightStrong } from '../../../components/utils/Util';
import { jobAcademyStyles } from './jobAcademyStyles';

export interface SubSection {
    title: string;
    items: string[];
    titleColor?: string;
    borderColor?: string;
    bgColor?: string;
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


// 제목이 있는 2컬럼 리스트를 위한 인터페이스
export interface TitledColumnItem {
    title: string;
    items: string[];
}

export interface TitledtwoThreeColumnListProps {
    leftColumn: TitledColumnItem;
    rightColumn: TitledColumnItem;
}

// 정보 박스를 위한 인터페이스 (제목 + 설명 + 리스트 패턴)
export interface InfoBox {
    title: string;
    description: string;
    items: string[];
    bgColor?: string;
    textColor?: string;
}

// h3 + ul 패턴을 위한 컴포넌트
export const SubSectionWithList: React.FC<SubSection> = ({ title, items, titleColor = jobAcademyStyles.textColors.grayDark, borderColor = jobAcademyStyles.borders.leftBlue, bgColor=jobAcademyStyles.containers.lightBox }) => (
    <div className={`${jobAcademyStyles.containers.lightBox} ${borderColor ? `border-l-4 ${borderColor}` : ''} shadow-sm ${bgColor}`}>
        {title && <h3 className={`${titleColor} ${jobAcademyStyles.headings.h4} mb-4`}>{title}</h3>}
        <ul className={`${jobAcademyStyles.textColors.grayLight} ${jobAcademyStyles.spacing.itemSpacing}`}>
            {items.map((item, index) => {
                const html = highlightStrong(item);
                return <li key={index}>• <span dangerouslySetInnerHTML={{ __html: html }} /></li>;
            })}
        </ul>
    </div>
);

// 번호가 매겨진 리스트 컴포넌트
export const NumberedListComponent: React.FC<NumberedList> = ({ items, borderColor = jobAcademyStyles.borders.leftBlue, textColor = jobAcademyStyles.textColors.link }) => (
    <div className={jobAcademyStyles.grids.twoColumn}>
        {items.map((item, index) => (
            <div key={index} className={`${jobAcademyStyles.containers.lightBox} ${borderColor} shadow-sm border-l-4 `}>
                <span className={`${textColor} font-bold`}>{index + 1}. </span>
                <span className={jobAcademyStyles.textColors.grayLight}>{item}</span>
            </div>
        ))}
    </div>
);

// 아이콘 리스트 컴포넌트
export const IconListComponent: React.FC<IconList> = ({ items, icon, iconColor, borderColor = jobAcademyStyles.borders.leftYellow }) => (
    <div className={jobAcademyStyles.grids.twoColumn}>
        {items.map((item, index) => (
            <div key={index} className={`${jobAcademyStyles.containers.lightBox} ${borderColor} border-l-4 rounded-lg shadow-sm`}>
                <span className={`${iconColor} font-bold`}>{icon} </span>
                <span className={jobAcademyStyles.textColors.grayLight}>{item}</span>
            </div>
        ))}
    </div>
);

// 질문 리스트 컴포넌트 (세로 배열)
// export const QuestionListComponent: React.FC<QuestionList> = ({ questions, borderColor = jobAcademyStyles.borders.leftYellow, textColor = jobAcademyStyles.textColors.warning }) => (
//     <div className={jobAcademyStyles.spacing.largeSpacing}>
//         {questions.map((question, index) => (
//             <div key={index} className={`${jobAcademyStyles.containers.lightGrayBox} p-6 ${borderColor}`}>
//                 <h3 className={`${textColor} font-bold mb-2`}>{question}</h3>
//             </div>
//         ))}
//     </div>
// );

// h2 + 여러 SubSectionWithList 패턴을 위한 컴포넌트
export const SectionWithSubSectionsComponent: React.FC<SectionWithSubSections> = ({ title, subSections }) => (
    <section className={jobAcademyStyles.section.basic}>
        {title && <h2 className={jobAcademyStyles.sectionTitle}>
            {title}
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
        </h2>}

        <div className={`${jobAcademyStyles.spacing.sectionSpacing}  ${jobAcademyStyles.grids.twoColumn}`}>
            {subSections.map((subSection, index) => (
                <div className={"shadow-sm"}>
                    <SubSectionWithList key={index} {...subSection} />
                </div>
            ))}
        </div>
    </section>
);

// 제목 + 설명 + 팁 리스트 컴포넌트 (면접 후 할 일 패턴)
export const TasksListComponent: React.FC<TasksList> = ({ tasks, borderColor = jobAcademyStyles.borders.leftEmerald }) => (
    <div className={`${jobAcademyStyles.spacing.largeSpacing} ${jobAcademyStyles.grids.twoColumn}`}>
        {tasks.map((item, index) => (
            <div key={index} className={`${jobAcademyStyles.containers.lightBox}  shadow-lg p-6 ${borderColor}`}>
                {item.title && <h3 className={`${jobAcademyStyles.textColors.grayDark} ${jobAcademyStyles.headings.h4} mb-4`}>{item.title}</h3>}
                {item.description && <p className={`${jobAcademyStyles.textColors.grayLight} mb-4`}>{item.description}</p>}
                <ul className={`${jobAcademyStyles.textColors.grayLight} ${jobAcademyStyles.spacing.itemSpacing}`}>
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
    <div className={jobAcademyStyles.grids.singleColumn}>
        {items.map((item, index) => (
            <div key={index} className={`${jobAcademyStyles.containers.lightBox} p-6 shadow-sm ${jobAcademyStyles.borders.leftBlue}`}>
                <div className="flex items-start space-x-4">
                    <div className={jobAcademyStyles.icons.circleIcon}>
                        {item.letter}
                    </div>
                    <div>
                        <h3 className={`${jobAcademyStyles.textColors.grayDark} ${jobAcademyStyles.headings.h4} mb-2`}>{item.title}</h3>
                        <p className={`${jobAcademyStyles.textColors.grayLight} mb-3`}>{item.description}</p>
                        <p className="text-zinc-800 italic">{item.example}</p>
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
    bgColor = "bg-gradient-to-b from-amber-200 to-amber-200/50 shadow-sm p-6 rounded-lg",
    textColor = "text-zinc-900"
}) => (
    <div className={`${bgColor} ${textColor}`}>
        {title && <h3 className={`${jobAcademyStyles.headings.h4} mb-4`}>{title}</h3>}
        <ul className={jobAcademyStyles.spacing.itemSpacing}>
            {questions.map((question, index) => (
                <li key={index}>• {question}</li>
            ))}
        </ul>
    </div>
);


// 비교 테이블을 위한 인터페이스
export interface TableProps {
    title: string;
    headers: string[];
    rows: string[][];
    bgColor?: string;
}

// 비교 테이블 컴포넌트 (한국 vs 캐나다 문화 비교 등)
export const TableComponent: React.FC<TableProps> = ({ title, headers, rows, bgColor = jobAcademyStyles.containers.yellowLightBox }) => (
    <section className={`${bgColor} shadow-sm`}>
        <h2 className={jobAcademyStyles.sectionTitle}>
            {title}
            <span className={jobAcademyStyles.sectionTitleAccent}></span>
        </h2>

        <div className="overflow-x-auto">
            <table className={jobAcademyStyles.table.table}>
                <thead>
                    <tr className={jobAcademyStyles.table.header}>
                        {headers.map((header, index) => (
                            <th key={index} className={jobAcademyStyles.table.headerCell}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row: string[], index: number) => (
                        <tr key={index} className={index % 2 === 0 ? jobAcademyStyles.table.evenRow : jobAcademyStyles.table.oddRow}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className={cellIndex === 0 ? jobAcademyStyles.table.firstCell : jobAcademyStyles.table.cell}>
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
    <div className={jobAcademyStyles.grids.singleColumn}>
        {items.map((item: CultureComparisonItem, index: number) => (
            <div key={index} className={`${jobAcademyStyles.containers.lightBox} p-6 ${item.borderColor}`}>
                {item.title && <h3 className={`${jobAcademyStyles.textColors.grayDark} ${jobAcademyStyles.headings.h4} mb-4`}>{item.title}</h3>}
                <div className={jobAcademyStyles.grids.twoThreeColumn}>
                    <div className={`${jobAcademyStyles.containers.orangeBox} p-3 rounded ${jobAcademyStyles.borders.leftBlue400}`}>
                        <h3 className={`${jobAcademyStyles.textColors.grayDark} font-semibold`}>{item.korea.title}</h3>
                        <p className={jobAcademyStyles.textColors.darkZinc} >{item.korea.description}</p>
                    </div>
                    <div className={`${jobAcademyStyles.containers.cyanBox} p-3 rounded ${jobAcademyStyles.borders.leftBlue400}`}>
                        <h3 className={`${jobAcademyStyles.textColors.grayDark} font-semibold`}>{item.canada.title}</h3>
                        <p className={jobAcademyStyles.textColors.darkZinc} >{item.canada.description}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
);


// 제목이 있는 2컬럼 리스트 컴포넌트 (제목 + 리스트 패턴)
export const TitledtwoThreeColumnListComponent: React.FC<TitledtwoThreeColumnListProps> = ({ leftColumn, rightColumn }) => (
    <div className={jobAcademyStyles.grids.twoColumn}>
        <div className="text-neutral-800">
            {leftColumn.title && <p className="mb-3">{leftColumn.title}</p>}
            <ul className="space-y-1">
                {leftColumn.items.map((item: string, index: number) => (
                    <li key={index}>• <span dangerouslySetInnerHTML={{ __html: highlightStrong(item) }} /></li>
                ))}
            </ul>
        </div>
        <div className="text-neutral-800">
            {rightColumn.title && <p className="mb-3">{rightColumn.title}</p>}
            <ul className="space-y-1">
                {rightColumn.items.map((item: string, index: number) => (
                    <li key={index}>• <span dangerouslySetInnerHTML={{ __html: highlightStrong(item) }} /></li>
                ))}
            </ul>
        </div>
    </div>
);

// 단일 제목이 있는 리스트를 위한 인터페이스 (작은 제목 + 리스트 패턴)
export interface SingleTitledListProps {
    title: string;
    items: string[];
    titleClass?: string;
    textColor?: string;
    bgColor?: string;
}

// 단일 제목이 있는 리스트 컴포넌트 (작은 제목 + 리스트 패턴)
export const SingleTitledListComponent: React.FC<SingleTitledListProps> = ({
    title,
    items,
    titleClass = "font-semibold mb-2",
    textColor = "text-gray-800",
    bgColor = "bg-amber-100"
}) => (
    <div className={`${bgColor} mt-4 p-6 rounded-lg shadow-sm`}>
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

export interface InfoBoxProps {
    title: string;
    description: string;
    items: string[];
    bgColor?: string;
    textColor?: string;
    borderColor?: string;
}

// 정보 박스 컴포넌트 (제목 + 설명 + 리스트 패턴)
export const InfoBoxComponent: React.FC<InfoBoxProps> = ({
    title,
    description,
    items,
    bgColor = jobAcademyStyles.containers.cyanBox,
    textColor = jobAcademyStyles.textColors.grayDark,
    borderColor = jobAcademyStyles.borders.leftBlue400
}) => (
    <div className={`${bgColor} p-6 rounded-lg ${borderColor ? `border-l-4 ${borderColor}` : ''}`}>
        {title && <h3 className={`${textColor} ${jobAcademyStyles.headings.h4} mb-4`}>{title}</h3>}
        {description && <p className={`${textColor} mb-4`}>{description}</p>}
        <ul className={`${textColor} ${jobAcademyStyles.spacing.itemSpacing}`}>
            {items.map((item: string, index: number) => (
                <li key={index}>• <span dangerouslySetInnerHTML={{ __html: highlightStrong(item) }} /></li>
            ))}
        </ul>
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
    textColor = "text-yellow-900",
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
export interface SimpletwoThreeColumnListProps {
    title?: string;
    leftColumnItems: string[];
    rightColumnItems: string[];
    bgColor?: string;
    titleColor?: string;
    textColor?: string;
    spacing?: string;
}

export const SimpletwoThreeColumnListComponent: React.FC<SimpletwoThreeColumnListProps> = ({
    title,
    leftColumnItems,
    rightColumnItems,
    bgColor = "bg-slate-400",
    titleColor = "text-stone-900",
    textColor = "text-stone-800",
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
    textColor = "text-black",
    spacing = "space-y-1"
}) => (
    items && items.length > 0 ? (
        <div className={`${borderColor ? `border-l-4 ${borderColor}` : ''} pl-4`}>
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
    titleColor = "text-black",
    textColor = "text-black",
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
    borderColor?: string;
}

// BoxListComponent - 박스형 배경에 제목 + 목록 컴포넌트
export const BoxListComponent: React.FC<BoxListProps> = ({
    title,
    items,
    bgColor = jobAcademyStyles.containers.lightBox,
    titleColor = jobAcademyStyles.textColors.grayDark,
    textColor = jobAcademyStyles.textColors.grayLight,
    spacing = jobAcademyStyles.spacing.listSpacing,
    padding = "p-6",
    marginBottom = "",
    borderColor = jobAcademyStyles.borders.leftBlue
}) => (
    items && items.length > 0 ? (
        <div className={`${bgColor} ${padding} rounded-lg ${marginBottom} ${borderColor ? `border-l-4 ${borderColor}` : ''} shadow-sm`}>
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
    borderColor?: string;
}

// MultiColumnListComponent - 다중 컬럼 리스트 컴포넌트
export const MultiColumnListComponent: React.FC<MultiColumnListProps> = ({
    title,
    columns,
    bgColor = jobAcademyStyles.containers.lightBox,
    titleColor = jobAcademyStyles.textColors.grayDark,
    textColor = jobAcademyStyles.textColors.grayLight,
    spacing = jobAcademyStyles.spacing.listSpacing,
    padding = "p-6",
    marginBottom = "mb-6",
    gridCols = jobAcademyStyles.grids.threeColumn,
    borderColor = jobAcademyStyles.borders.leftBlue
}) => (
    columns && columns.length > 0 ? (
        <div className={`${bgColor} ${padding} rounded-lg ${marginBottom} ${borderColor ? `border-l-4 ${borderColor}` : ''} shadow-sm`}>
            <h3 className={`${titleColor} font-bold mb-3`}>{title}</h3>
            <div className={gridCols}>
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
    gridCols = jobAcademyStyles.grids.twoThreeColumn,
    textColor = jobAcademyStyles.textColors.grayLight,
    titleClass = "font-semibold mb-2",
}) => (
    items && items.length > 0 ? (
        <div className={gridCols}>
            {items.map((item, index) => (
                <div key={index} className={textColor}>
                    <p className={`mb-2 ${titleClass}`}><span dangerouslySetInnerHTML={{ __html: highlightStrong(item.title) }} /></p>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    ) : null
);


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
    borderColor?: string;
}

// 단계별 가이드 컴포넌트 (제목 + 색깔별 단계 설명 패턴)
export const StepGuideComponent: React.FC<StepGuideProps> = ({
    title,
    steps,
    bgColor = "bg-purple-100",
    textColor = "text-black",
    borderColor = jobAcademyStyles.borders.leftEmerald
}) => (
    <div className={`${bgColor} ${borderColor} p-6 rounded-lg `}>
        {title && <h3 className={`${textColor} text-xl font-bold mb-4`}>{title}</h3>}
        <div className="space-y-4">
            {steps.map((step: StepGuideItem, index: number) => (
                <div key={index} className={`${step.borderColor ? `border-l-4 ${step.borderColor}` : ''} pl-4`}>
                    <h3 className={`${step.titleColor} font-semibold mb-2`}>{step.stepTitle}</h3>
                    <p className={textColor}>{step.stepDescription}</p>
                </div>
            ))}
        </div>
    </div>
);

// 참고 자료 섹션을 위한 인터페이스
export interface ReferenceSection {
    title: string;
    governmentTitle: string;
    governmentItems: string[];
    associationsTitle: string;
    associationsItems: string[];
    notice: string;
    bgColor?: string;
    textColor?: string;
    noticeBoxColor?: string;
    noticeTextColor?: string;
}

// 참고 자료 섹션 컴포넌트
export const ReferenceSectionComponent: React.FC<ReferenceSection> = ({
    title,
    governmentTitle,
    governmentItems,
    associationsTitle,
    associationsItems,
    notice,
    bgColor = jobAcademyStyles.containers.cyanBox,
    textColor = "text-black",
    noticeBoxColor = jobAcademyStyles.containers.stoneLightBox,
    noticeTextColor = jobAcademyStyles.textColors.grayLight
}) => (
    <section className={jobAcademyStyles.spacing.marginBottom12}>
        <div className={bgColor}>
            <h2 className={`${textColor} text-2xl font-bold mb-6 pb-2 border-b-4 border-blue-500 relative`}>
                {title}
                <span className={jobAcademyStyles.sectionTitleAccent}></span>
            </h2>
            <div className={jobAcademyStyles.grids.twoColumn}>
                <SimpleReferenceListComponent
                    title={governmentTitle}
                    items={governmentItems}
                />
                <SimpleReferenceListComponent
                    title={associationsTitle}
                    items={associationsItems}
                />
            </div>
            <div className={`${noticeBoxColor} shadow-lg mt-4 border border-blue-700`}>
                <p className={noticeTextColor}>
                    {notice}
                </p>
            </div>
        </div>
    </section>
);

// SimpleReferenceListComponent interface
interface SimpleReferenceListComponentProps {
    title: string;
    items: string[];
}

// SimpleReferenceListComponent: text-gray-200 container with h3 title and simple list
export const SimpleReferenceListComponent: React.FC<SimpleReferenceListComponentProps> = ({ title, items }) => {
    return (
        <div className="text-gray-800">
            {title && <h3 className="text-zinc-900 font-bold mb-3">{title}</h3>}
            <ul className="space-y-1">
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};



// ThreeColumnStepComponent interface
// interface StepItem {
//     title: string;
//     description: string;
//     textColor?: string;
// }

// interface ThreeColumnStepComponentProps {
//     title: string;
//     steps: StepItem[];
//     bgColor?: string;
//     titleColor?: string;
//     marginBottom?: string;
// }

// ThreeColumnStepComponent: 3열 단계별 프로세스 컴포넌트
// export const ThreeColumnStepComponent: React.FC<ThreeColumnStepComponentProps> = ({
//     title,
//     steps,
//     bgColor = jobAcademyStyles.containers.cyanBox,
//     titleColor = jobAcademyStyles.textColors.grayDark,
//     marginBottom = "mb-6"
// }) => (
//     <div className={`${bgColor} ${titleColor} ${marginBottom}`}>
//         <h3 className={`font-bold mb-3`}>{title}</h3>
//         <div className={jobAcademyStyles.grids.threeColumn}>
//             {steps.map((step, index) => (
//                 <div key={index} className={step.textColor || jobAcademyStyles.textColors.grayLight}>
//                     <h3 className="font-semibold mb-2">{step.title}</h3>
//                     <p>{step.description}</p>
//                 </div>
//             ))}
//         </div>
//     </div>
// );


// // 참고 자료 섹션을 위한 인터페이스
// export interface ReferenceItem {
//     items: string[];
// }

// export interface ReferenceListProps {
//     leftColumn: ReferenceItem;
//     rightColumn: ReferenceItem;
// }

// // 참고 자료 리스트 컴포넌트 (2컬럼 리스트 패턴)
// export const ReferenceListComponent: React.FC<ReferenceListProps> = ({ leftColumn, rightColumn }) => (
//     <div className={jobAcademyStyles.grids.twoThreeColumn}>
//         <div className={jobAcademyStyles.textColors.grayLight}>
//             {leftColumn.items.map((item: string, index: number) => (
//                 <p key={index} className="mb-2">• {item}</p>
//             ))}
//         </div>
//         <div className={jobAcademyStyles.textColors.grayLight}>
//             {rightColumn.items.map((item: string, index: number) => (
//                 <p key={index} className="mb-2">• {item}</p>
//             ))}
//         </div>
//     </div>
// );
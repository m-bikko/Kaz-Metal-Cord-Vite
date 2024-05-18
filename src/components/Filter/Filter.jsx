import React, {useEffect, useState} from "react";
import './Filter.css'
import FilterAccordion from '../FilterAccordion/FilterAccordion.jsx'

function Filter({ saveData, filterData }) {
    const [isActive, setIsActive] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState({});


    const handleIsActive = () => {
        setIsActive(!isActive);
    }

    const handleFilterChange = (type, values) => {
        if (values.length === 0) {
            setSelectedFilters(null);
        }
        else {
            setSelectedFilters((prevFilters) => ({
                ...prevFilters,
                [type]: values,
            }));
        }
    };

    useEffect(() => {
        saveData(selectedFilters)
    }, [saveData, selectedFilters]);


    return (
        <div className={`filter`}>
            <button className={`filter-button ${isActive? 'active':''}`} onClick={handleIsActive}>
                {
                    isActive ?
                        (<svg className={`filter-icon`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 18 6m0 12L6 6"/>
                        </svg>)
                        :
                        (<svg className={`filter-icon`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4"/>
                        </svg>)
                }

                <span>Фильтры</span>
            </button>
            <div className={`filter-container ${isActive ? 'active' : ''}`}>
                {
                    Object.keys(filterData).map(filterItem => (
                        <FilterAccordion
                            type={filterItem}
                            checkbox={filterData}
                            onFilterChange={handleFilterChange}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Filter;
                            
                                    {Array.isArray(JSONDATA) && JSONDATA.map((icon) => {
                                        return <IconAct iconResults={icon}
                                            key={icon.id}
                                           />
                                    })
                                    }         
                                    
                                    onChange=event => {
                                        setSearchTerm(event.target.value)                           
                                    }


                                    Array.isArray(resultIcon) && resultIcon.map((icon) => {
                                        return <IconAct key={icon.id} src={icon.src} alt={icon.image}
                                            iconName={icon.name}
                                        />})
{/* <div className="row col-12">
                        <input
                            type="text"
                            className="search__input text-center mb-24"
                            placeholder="Search..."
                            onChange={event => {
                                setSearchTerm(event.target.value)
                            }}
                        />
                    </div>
                    <>
                        {JSONDATA.filter((val) => {
                            if (searchTerm == "") {
                                return val
                            } else if (val.act.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val
                            }
                        }).map((val, key) => {
                            return (
                                <div className="col-3 text-center mt-15" key={key}>
                                    <div id="act-icon">
                                        <img className="pt-15" src={val.icon} alt="" />
                                        <p>{val.act}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </> */}

                    setUserName(nameToCheck);

                    alert(`This ${nameToCheck} is already taken palese Change.`)
const Search = ({ searchTerm, setSearch }) => (
    <div className="group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="30" height="45" viewBox="0 0 24 24" strokeWidth="1" stroke="#bbb" fill="none" strokeLinecap="square" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="10" cy="10" r="7" />
                        <line x1="21" y1="21" x2="15" y2="15" />
                    </svg>
                    <span className="input input--nao">
                        <input className="input__field input__field--nao" type="text" value={searchTerm} onChange={e => setSearch(e.target.value)} id="input-1" placeholder='"Distopi"' />
                        <svg className="graphic graphic--nao" width="300%" height="100%" viewBox="0 0 1200 60"
                            preserveAspectRatio="none">
                            <path
                                d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0" />
                        </svg>
                    </span>
                </div>
);

export default Search;
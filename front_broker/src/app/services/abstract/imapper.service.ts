export interface IXMLtoArrayMapperService<S, T> {
    transform(xml: S): T[];
}

export interface IXMLtoObjectMapperService<S, T> {
    xmlToDto(xml: S): T;
    dtoToXML(dto: T): S;
}
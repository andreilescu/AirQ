package com.airQ.converter;

public interface Converter<Entity, TO> {

	TO convertEntityIntoTO(final Entity entity, final TO to);

	Entity convertTOIntoEntity(final TO to, final Entity entity);
}

create table user_basic(
    userid bigint not null auto_increment primary key,
    username varchar(64) unique not null ,
    password_sha256 varchar(64) not null,
    reg_time timestamp not null,
    nickname varchar(64) unique not null
);
create table invite_code_list(
    invite_code character(16) not null,
    death_time timestamp not null
);
create table follow_map(
    followed_by bigint not null,
    follow_target bigint not null,
    follow_time timestamp not null
);
create table session_map(
    sess_id character(32) unique not null,
    userid bigint not null,
    death_time timestamp not null
)
